Preferences._ensureIndex({
  'userId': 1,
  'name': 1
});

// auto publish
Meteor.publish(null, function(){
  if (!this.userId){
    this.ready();
    return;
  }
  return Preferences.find({
    userId: this.userId
  });
});
