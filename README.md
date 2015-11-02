# preferences-mongo

A store for the `3stack:preferences` package, that uses a `Mongo.collection` to store settings on a per-user basis.

Note: Unlike `preferences-local-storage`, you must provide a userId (or a user must be logged-in if using
`preference-var`)



## Changes

### v1.1.0

Use `MongoPreferenceStore.ready()` to see if the preferences subscription has loaded.
