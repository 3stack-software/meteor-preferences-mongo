Preferences = new Mongo.Collection('preferences');

MongoPreferenceStore = {
  get: function MongoPreferenceStore_get(userId, name){
    var self = this,
      preference = Preferences.findOne(self.key(userId, name), {
      reactive: false,
      fields: {
        value: true
      }
    });
    if (preference != null) {
      return preference.value;
    }
  },
  key: function MongoPreferenceStore_key(userId, name){
    check(userId, Match.OneOf(String, Mongo.ObjectID));
    check(name, String);
    return {
      name: name,
      userId: userId
    };
  },
  set: function MongoPreferenceStore_set(userId, name, value){
    Meteor.call('preferences-mongo.set', name, value);
  }
};

Meteor.methods({
  'preferences-mongo.set': function(name, value){
    Preferences.upsert(MongoPreferenceStore.key(this.userId, name), {
      $set: {
        value: value
      }
    });
  }
});

