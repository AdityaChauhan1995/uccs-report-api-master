// Jobs that process Standard annd Adhoc Report which are in New status

var stdReportsprocessor = require('../batch/standard-report-processor');
var adhReportsprocessor = require('../batch/adhoc-report-processor');

module.exports = function (agenda) {

  agenda.define('STANDARD_REPROT_1', function (job, done) {
    console.log('Job attribute data ' + job.attrs.data);
    if (job.attrs.data.reportType == "Standard Report") {
      stdReportsprocessor.processStaticReport(job.attrs)
        .then(status => {
          console.log(job.attrs._id + ':' + job.attrs.data +' after calling function next run at ' + job.attrs.nextRunAt)
          done();
        })
        .catch(error => {
          console.log(job.attrs._id + ' job failed with error ' + error);
          done();
        });
    }
  });



  agenda.define('STANDARD_REPROT_2', function (job, done) {
    console.log('Job attribute data ' + job.attrs.data);
    stdReportsprocessor.processReport(job.attrs.data)
      .then(status => {
        console.log(job.attrs._id + ':' + job.attrs.data +' after calling function next run at ' + job.attrs.nextRunAt)
        done();
      })
      .catch(error => {
        console.log(job.attrs._id + ' job failed with error ' + error);
        done();
      });

  });

  agenda.define('ADHOC_REPORT_1', function (job, done) {
    console.log('Job attribute data ' + job.attrs.data);
    if (job.attrs.data.reportType == "Adhoc Report" 
  //  		&& job.attrs.data.inputAllowed == "false"
		){
      stdReportsprocessor.processReport(job.attrs.data)
      .then(status => {
        console.log(job.attrs._id + ':' + job.attrs.data +' after calling function next run at ' + job.attrs.nextRunAt)
        done();
      })
      .catch(error => {
        console.log(job.attrs._id + ' job failed with error ' + error);
        done();
      });
    }
  });

  // agenda.define('ADHOC_REPORT_2', function (job, done) {
  //   console.log('Job attribute data ' + job.attrs.data);
  //   if (job.attrs.data.reportType == "Adhoc Report" && job.attrs.data.inputAllowed == "true") {
  //     stdReportsprocessor.processReport(job.attrs.data)
  //     .then(status => {
  //       console.log(job.attrs._id + ':' + job.attrs.data +' after calling function next run at ' + job.attrs.nextRunAt)
  //       done();
  //     })
  //     .catch(error => {
  //       console.log(job.attrs._id + ' job failed with error ' + error);
  //       done();
  //     });
  //   }
  // });

  agenda.define('SCHEDULED_REPORT_1', function (job, done) {
    console.log('Job attribute data ' + job.attrs.data);
    if (job.attrs.data.reportType == "Scheduled Report") {
      stdReportsprocessor.processScheduledReport(job.attrs)
        .then(status => {
          console.log(job.attrs._id + ':' + job.attrs.data +' after calling function next run at ' + job.attrs.nextRunAt)
          done();
        })
        .catch(error => {
          console.log(job.attrs._id + ' job failed with error ' + error);
          done();
        });
    }
  });



};