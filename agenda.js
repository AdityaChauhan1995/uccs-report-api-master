const Agenda = require('agenda');
const config = require('./config');

var agenda = new Agenda({ db: { address: config.mongo.uri, useNewUrlParser: true, collection: 'requestJobs' } });
// define max job concurrency for a single job type
agenda.defaultConcurrency(1);

module.exports.initialize = new Promise(function (resolve, reject) {
    agenda.on('ready', function () {
        console.log('agenda initialized');
        resolve({});
    });    
});

module.exports.jobs = agenda;