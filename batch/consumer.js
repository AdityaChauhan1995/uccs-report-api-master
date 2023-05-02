// Jobs
// ====
// The scheduled tasks setup
// and startup script.

const config = require('../config');
var
    Agenda = require('agenda'),
    mongoose = require('mongoose'),
    agenda = new Agenda({ name: 'UCCSJobs', db: { address: config.mongo.uri,  useNewUrlParser: true  , collection: 'requestJobs' }, maxConcurrency: 20, defaultConcurrency: 5, processEvery: '1 minute' }),
//     jobTypes = ["standardreport", "adhocreport"];


// jobTypes.forEach(function (type) {
//     console.log(type);
//     require('../jobs/' + type)(agenda);
// });


     defineagenda= require('./producer')(agenda);


//if (jobTypes.length) {

    agenda.on('ready', async function () {
        console.log('agenda initialized. scheduling job.. at ' + Date());


        await clearJobs()
            .then(msg => { console.log(msg); agenda.start(); })
            .catch(err => console.log(err));

        const job1 = agenda.create('STANDARD_REPROT_1', { "reportType" : "Standard Report" , "inputAllowed" : "false" , "frequency": "Monthly" });
        const job2 = agenda.create('STANDARD_REPROT_2', {  "reportType" : "Standard Report" , "inputAllowed" : "true" , "frequency": "Daily"});
        const job3 = agenda.create('ADHOC_REPORT_1',  {  "reportType" : "Adhoc Report" , "inputAllowed" : "true" , "frequency": "Daily" });
        const job4 = agenda.create('ADHOC_REPORT_2',  { "reportType" : "Adhoc Report" , "inputAllowed" : "true" , "frequency": "On Demand"});
        const job5 = agenda.create('SCHEDULED_REPORT_1',  { "reportType" : "Scheduled Report" , "inputAllowed" : "false" , "frequency": "Monthly"});

        job1.repeatEvery('1 month', { skipImmediate: true });
        job1.save(err => {
            console.log('Monthly Standard Report with no user Input Job successfully saved ' + job1.attrs.name);
        });

        job2.repeatEvery('30 minutes', { skipImmediate: true });
        job2.save(err => {
            console.log('Hourly Standard Report with user Input Job successfully saved ' + job2.attrs.name);
        });

        job3.repeatEvery('30 minutes', { skipImmediate: true });
        job3.save(err => {
            console.log('Adhoc Report with no user Input Job successfully saved ' + job3.attrs.name);
        });

        // job4.repeatEvery('1 hour', { skipImmediate: true });
        // job4.save(err => {
        //     console.log('Adhoc Report with user Input Job successfully saved ' + job4.attrs.name);
        // });

        job5.repeatEvery('1 month', { skipImmediate: true });
        job5.save(err => {
            console.log('Monthly Scheduled Report with no user Input Job successfully saved ' + job5.attrs.name);
        });

        console.log('job start and schedule successfully');

    });


    //agenda.start();
//}


agenda.on('start', function (job) {
    console.log(job.attrs.name, job.attrs._id, 'started', new Date());
});

agenda.on('complete', job => {
    console.log(`Job ${job.attrs.name} finished`);
});

agenda.on('success', function (job) {
    console.log(job.attrs.name, job.attrs._id, 'completed successfully', new Date());
});

agenda.on('fail', function (err, job) {
    console.log(job.attrs.name, job.attrs._id, 'failed:', err.message);
    //TODO - Update job status to failure 
});


// Handles graceful stopping of jobs
function graceful() {
    agenda.stop(function () {
        clearJobs();
        process.exit(0);
    });
}

process.on('SIGTERM', graceful);
process.on('SIGINT', graceful);

const clearJobs = () => {
    return new Promise((resolve, reject) => {

        let counter = 0;
        agenda.jobs({}, (err, jobs) => {
            if (err) reject(err);

            if (jobs.length == 0)
                resolve(jobs.length + ' - Job(s) deleted from requestJobs');
            else {
                jobs.forEach(function (job, index) {
                    job.remove(err => {
                        if (err) reject(err);
                        if (!err)
                            console.log('Successfully removed job from collection : ' + job.attrs.name + " : " + job.attrs._id);
                        counter = index + 1;
                        if (counter == jobs.length)
                            resolve(jobs.length + ' - Job(s) deleted from requestJobs');
                    });
                });
            }
        });

    });
};

module.exports = agenda;
