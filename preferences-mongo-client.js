var isReady = new ReactiveVar(false);
_.extend(MongoPreferenceStore, {
  ready: function(){ return isReady.get(); }
});

Tracker.autorun(function(c){
  var userId = Meteor.userId();
  if (userId == null) return;

  Meteor.subscribe('3stack:preferences-mongo', userId, function(){
    if (Meteor.userId() == userId) {
      console.log('Preferences sub ready for ' + userId);
      isReady.set(true)
    }
  });
  c.onInvalidate(function(){
    isReady.set(false);
  });
});

