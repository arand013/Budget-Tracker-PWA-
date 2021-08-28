const pendingObjectStoreName = `pending`;

// Creates a new db request for a "budget" database.
const request = indexedDB.open(`budget`, 2);

// Requests