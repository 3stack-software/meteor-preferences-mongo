Package.describe({
  name: '3stack:preferences-mongo',
  version: '1.1.0',
  summary: 'A preference store to use with 3stack:preferences',
  git: 'https://github.com/3stack-software/meteor-preferences-mongo',
  documentation: 'README.md'
});


Package.onUse(function(api){
  api.versionsFrom('METEOR@0.9.2');

  api.use([
    'underscore',
    'check',
    'minimongo',
    'ddp',
    'mongo',
    'ejson',
    'logging',
    'reactive-var',
    'tracker'
  ]);

  api.export([
    'Preferences',
    'MongoPreferenceStore'
  ]);
  api.addFiles('preferences-mongo-common.js', ['client', 'server']);
  api.addFiles('preferences-mongo-server.js', 'server');
  api.addFiles('preferences-mongo-client.js', 'client');
});
