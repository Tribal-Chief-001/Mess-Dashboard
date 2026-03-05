/* ═══════════════════════════════════════════════ */
/*  MESS INTEL — Community Ratings (Firebase)      */
/* ═══════════════════════════════════════════════ */

// ─── FIREBASE CONFIG ───
// 🔧 REPLACE these with your actual Firebase project config
// Go to: console.firebase.google.com → Project Settings → Web App
const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "000000000000",
    appId: "YOUR_APP_ID"
};

// ─── STATE ───
let firebaseReady = false;
let currentUID = null;
const aggregatesCache = {};  // { "day/meal/idx": { sum, count } }
let aggregatesListener = null;

// ─── INIT ───
async function initFirebase() {
    try {
        // Check if Firebase SDK loaded
        if (typeof firebase === 'undefined') {
            console.warn('[Mess Intel] Firebase SDK not loaded — running in offline mode');
            return false;
        }

        // Check for placeholder config
        if (FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
            console.warn('[Mess Intel] Firebase config not set — running in offline mode');
            return false;
        }

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }

        // Anonymous auth
        const auth = firebase.auth();
        await auth.signInAnonymously();
        currentUID = auth.currentUser.uid;

        // Listen for auth state changes
        auth.onAuthStateChanged(user => {
            if (user) {
                currentUID = user.uid;
            }
        });

        firebaseReady = true;
        console.log('[Mess Intel] Firebase ready — community ratings active');
        return true;
    } catch (err) {
        console.warn('[Mess Intel] Firebase init failed — running in offline mode', err);
        return false;
    }
}

// ─── HELPERS ───
function getAggKey(day, meal, itemIdx) {
    return `${day}/${meal}/${itemIdx}`;
}

function getFirebasePath(day, meal, itemIdx) {
    return `ratings/${day}/${meal}/${itemIdx}`;
}

function getAggregatePath(day, meal, itemIdx) {
    return `aggregates/${day}/${meal}/${itemIdx}`;
}

// ─── READ: Get Community Rating ───
function getCommunityRating(day, meal, itemIdx) {
    const key = getAggKey(day, meal, itemIdx);
    const cached = aggregatesCache[key];
    if (cached && cached.count > 0) {
        return {
            avg: Math.round((cached.sum / cached.count) * 10) / 10,
            count: cached.count
        };
    }
    return null; // No community data
}

// ─── READ: Fetch All Aggregates (one-time bulk read) ───
async function fetchAllAggregates() {
    if (!firebaseReady) return;

    try {
        const db = firebase.database();
        const snapshot = await db.ref('aggregates').once('value');
        const data = snapshot.val();

        if (data) {
            // Walk the tree: data[day][meal][idx] = { sum, count }
            for (const day of Object.keys(data)) {
                for (const meal of Object.keys(data[day])) {
                    for (const idx of Object.keys(data[day][meal])) {
                        const key = `${day}/${meal}/${idx}`;
                        aggregatesCache[key] = data[day][meal][idx];
                    }
                }
            }
        }

        console.log(`[Mess Intel] Loaded ${Object.keys(aggregatesCache).length} community ratings`);
    } catch (err) {
        console.warn('[Mess Intel] Failed to fetch aggregates', err);
    }
}

// ─── READ: Listen for Real-Time Updates ───
function listenForAggregateChanges(onUpdate) {
    if (!firebaseReady) return;

    const db = firebase.database();
    aggregatesListener = db.ref('aggregates').on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
            for (const day of Object.keys(data)) {
                for (const meal of Object.keys(data[day])) {
                    for (const idx of Object.keys(data[day][meal])) {
                        const key = `${day}/${meal}/${idx}`;
                        aggregatesCache[key] = data[day][meal][idx];
                    }
                }
            }
        }
        if (onUpdate) onUpdate();
    });
}

// ─── WRITE: Submit a Rating ───
async function submitCommunityRating(day, meal, itemIdx, newRating) {
    if (!firebaseReady || !currentUID) return;

    const db = firebase.database();
    const userRatingRef = db.ref(`${getFirebasePath(day, meal, itemIdx)}/${currentUID}`);
    const aggRef = db.ref(getAggregatePath(day, meal, itemIdx));

    try {
        // Get user's previous rating (if any)
        const prevSnapshot = await userRatingRef.once('value');
        const prevRating = prevSnapshot.val();

        // Write user's new rating
        await userRatingRef.set(newRating);

        // Update aggregate using a transaction
        await aggRef.transaction(current => {
            if (!current) {
                // First rating ever for this item
                return { sum: newRating, count: 1 };
            }

            if (prevRating !== null) {
                // User is updating their existing rating
                current.sum = (current.sum - prevRating) + newRating;
                // count stays the same
            } else {
                // New rating from this user
                current.sum = (current.sum || 0) + newRating;
                current.count = (current.count || 0) + 1;
            }

            return current;
        });

        // Update local cache immediately
        const key = getAggKey(day, meal, itemIdx);
        const cached = aggregatesCache[key];
        if (cached) {
            if (prevRating !== null) {
                cached.sum = (cached.sum - prevRating) + newRating;
            } else {
                cached.sum = (cached.sum || 0) + newRating;
                cached.count = (cached.count || 0) + 1;
            }
        } else {
            aggregatesCache[key] = { sum: newRating, count: 1 };
        }

    } catch (err) {
        console.warn('[Mess Intel] Failed to submit community rating', err);
    }
}

// ─── UTILITY: Check if Firebase is active ───
function isFirebaseActive() {
    return firebaseReady;
}

// ─── UTILITY: Get current user's Firebase rating for an item ───
async function getUserFirebaseRating(day, meal, itemIdx) {
    if (!firebaseReady || !currentUID) return null;

    try {
        const db = firebase.database();
        const snapshot = await db.ref(`${getFirebasePath(day, meal, itemIdx)}/${currentUID}`).once('value');
        return snapshot.val();
    } catch {
        return null;
    }
}

// ─── CLEANUP ───
function cleanupFirebase() {
    if (aggregatesListener) {
        const db = firebase.database();
        db.ref('aggregates').off('value', aggregatesListener);
        aggregatesListener = null;
    }
}
