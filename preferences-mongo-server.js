Preferences._ensureIndex({
  'userId': 1,
  'name': 1
});

// auto publish
Meteor.publish('3stack:preferences-mongo', function(userId){
  if (this.userId == null || userId !== this.userId){
    this.ready();
    return;
  }
  return Preferences.find({
    userId: this.userId
  });
});
