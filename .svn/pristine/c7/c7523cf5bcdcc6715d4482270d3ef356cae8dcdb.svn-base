// processing functions for all standard reports
var requests = require('../model/request'),
    constants = require('../config/constants'),
    queryHelper = require('../helpers/query-helper'),
    queryexecution = require('../helpers/executequery-helper'),
    fs = require('fs'),
    stringify = require('csv-stringify'),
    mailhelper = require('../helpers/mail-helper'),
    reportModel = require('../model/report'),
    logger = require('../logs/logger').Logger;


// function generateFile(request, file, fileName) {
//     let status = true;
//     //let fileName = "./downloads/" + report.reportName.replace(new RegExp(' ', 'g'), '_') + '_' + Date.now() + ".csv";

//     // var file = fs.createWriteStream(fileName, { flags: 'w' });
//     // var startTime = Date.now();
//     // resultdata.pipe(stringify()).pipe(file);
//     // console.log(fileName);
//     file.on('close', function () {
//         console.log("Report generated successfully");
//         file.end();
//         requests.updateRequestStatus(request.id, fileName, 'Completed', function (status, err) {
//             if (err)
//             { console.log(err); throw err; }
//             else
//                 console.log('Request status updated successfully : ' + status);
//         })
//         mailhelper.sendMail(request.userid, fileName, request.reportName, new Date().toISOString(), function (err, info) {
//             if (err) { console.log(err); throw err; }
//             else
//             { console.log(info); status = true; }
//         });
//     });

//     file.on('error', function (err) {
//         console.log('find error ' + err.stack);
//         status = false;
//     });

//     return status;
// }


module.exports.processReport = function (data) {

    return new Promise((resolve, reject) => {
        var status = true;
        var err = "";
        let reportType = data.reportType;//'Standard Report'
        //Send reportType and frequency
        var query = "";

        requests.findNewRequestStandard(reportType, async function (error, repdata) {

            if (error || !repdata) {
                console.log(error + " for report Type : " + reportType);
                reject(error);
            }
            else {
                try {
                    status = await processEachRequest(repdata, reportType);
                    resolve(status);
                }
                catch (err) { reject(err) }
            }
        });

    });
}


async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

const processEachRequest = async (repdata, reportType) => {
    let status = true;

    await asyncForEach(repdata, async (report, index) => {
        try {
            status = await genearetUserReport(report, index, reportType);
            console.log('Execution status of ' + report.reportName + " : " + status);
        } catch (err) {
            console.log('Error in report generation block : ' + err);
            throw err;
        }
    })
    console.log('All requests processed')
    return status;
}



const genearetUserReport = function (request, index, reportType) {

    console.log("Processing Request for schdeuler  for report : " + request.reportName);
    return new Promise(async function (resolve, reject) {
        let query = "";
	let status = true;
        try {
            if (reportType == "Standard Report")
                query = await queryHelper.prepareStmtStandard(request,reportType);
            else if (reportType == "Adhoc Report")
                query = await queryHelper.prepareStmtAdhoc(request,reportType);


            logger.info(request.reportName + " --> " + query);
            let fileName = "./downloads/" + request.reportName.replace(new RegExp(' ', 'g'), '_').replace(/[^a-zA-Z0-9 ]/g, "") + '_' +
                new Date().toISOString().replace(/[^0-9 ]/g, "") + ".csv";

            // let file = await queryexecution.executeReport(query, fileName);

            // let status = await generateFile(request, file, fileName);
            // console.log('I m here ' + status);
            // resolve(status);
            queryexecution.executeReport(query,fileName,request.reportName)
                .then((rowsProcessed) => {
                    console.log("File write completes for reportrequest id : "+request.id + " with rows :"+rowsProcessed);
                    logger.info("Report generated successfully :"+request.id + " with rows :"+rowsProcessed);   
                       
                        requests.updateRequestStatus(request.id, fileName, 'Completed', function (status, err) {
                            if (err)
                            { console.log(err); throw err; }
                            else
                                console.log('Request status updated successfully : ' + status);
                        })
                        mailhelper.sendMail(request.userid, fileName, request.reportName, new Date().toISOString(), function (err, info) {
                            if (err) { console.log(err); throw err; }
                            else
                            { console.log(info); status = true; }
                        });
	               		resolve(status);		    
                })
                .catch(err => {
                    console.log('Exception handling : ' + err);
                    status = false;
                    requests.updateRequestStatus(request.id, 'SYSTEM_ERROR', 'Failed', function (status, err) {
               	    if (err) { console.log(err); reject(err); }
	                else { status = false; resolve(status); }
        	    });
	            //reject(err);
                });

        }
        catch (err) {
            console.log(status +'Exception handling : ' + err);
            requests.updateRequestStatus(request.id, 'SYSTEM_ERROR', 'Failed', function (status, err) {
                if (err) { console.log(err); }
                else { status = false; resolve(status); }
            });
            reject(err);
        }
    })
};



module.exports.processStaticReport = async function (jobattrs) {

    return new Promise(async function (resolve, reject) {

        jobdata = jobattrs.data
        console.log(jobdata);
        var status = true;
        var err = "";
        var query = "";

        try {
            await reportModel.findMonthlyReport(jobdata, function (error, repdata) {

                if (error || !repdata)
                    reject(error);
                else {

                    repdata.forEach(function (report, index) {
                        logger.info("Processing Request for schdeuler  for report : " + report.name);
                        let fileName = "";
                        let querybuilder = report.queryConstant;
                        logger.info(report.name + " --> " + constants[querybuilder]);
                        fileName = "./downloads/" + report.name.replace(new RegExp(' ', 'g'), '_').replace(/[^a-zA-Z0-9 ]/g, "") + '_' +
                            new Date().toISOString().replace(/[^0-9 ]/g, "") + ".csv";

                        queryexecution.executeReport(constants[querybuilder],fileName,report.name)
                            .then((rowsProcessed) => {

                                    logger.info(new Date().toISOString() + " : " + report.name + " Report generated successfully");
                                    console.log(new Date().toISOString() + " : " + report.name + ' : File processed '+rowsProcessed);

                                    reportModel.updateReportStatus(report.id, fileName, jobattrs.nextRunAt, jobattrs.lastRunAt, function (status, err) {
                                        if (err)
                                        { console.log(err); throw err; }
                                        else
                                            logger.info(report.name + ' Report status updated successfully : ' + status);

                                    });

                            })
                            .catch(err => {
                                console.log(report.id + " : " + report.name+ 'Exception handling : ' + err);
                                status = false;
                                reportModel.updateReportStatus(report.id, err, jobattrs.nextRunAt, jobattrs.lastRunAt, function (status, err) {
                                    if (err)
                                    { console.log(err); throw err; }
                                    else
                                        logger.info('Report status updated successfully : ' + status);
                                });
				throw err;
                            });
                        console.log("Submitted Request for schdeuler report " + report.name);
                    });
                    resolve(status);
                }
            });
        }
        catch (error)
        { console.log(error); reject(error) }
    });
}




module.exports.processScheduledReport = async function (jobattrs) {

    return new Promise(async function (resolve, reject) {

        jobdata = jobattrs.data
        console.log(jobdata);
        var status = true;
        var err = "";
        var query = "";
        var d = new Date();
        var n = (d.getDate().toString().length == 1)? "0"+d.getDate().toString():d.getDate().toString();
        var m = ((d.getMonth()+1).toString().length == 1)? "0"+(d.getMonth()+1).toString():(d.getMonth()+1).toString();
        var y = d.getFullYear().toString();
        var dateFormat = n+m+y;

        try {
            await reportModel.findMonthlyReport(jobdata, function (error, repdata) {

                if (error || !repdata)
                    reject(error);
                else {

                    repdata.forEach(function (report, index) {
                        logger.info("Processing Request for schdeuler  for report : " + report.name);
                        let fileName = "";
                        let querybuilder = report.queryConstant;
                        logger.info(report.name + " --> " + constants[querybuilder]);
                        fileName = "./downloads/" + report.name.replace(new RegExp(' ', 'g'), '_').replace(/[^a-zA-Z0-9 ]/g, "") + '_' +
                                    dateFormat + ".csv";

                        queryexecution.executeReport(constants[querybuilder], fileName, report.name)
                            .then((rowsProcessed) => {

                                logger.info(new Date().toISOString() + " : " + report.name + " Report generated successfully");
                                console.log(new Date().toISOString() + " : " + report.name + ' : File processed ' + rowsProcessed);
                                
                                var filePlaced = false;
                                
                                reportModel.updateScheduledReportStatus(jobdata.reportType, fileName, jobattrs.nextRunAt, jobattrs.lastRunAt, function (status, err) {
                                    if (err)
                                    { console.log(err); throw err; }
                                    else{
                                        filePlaced = true;
                                        logger.info(report.name + ' Report status updated successfully : ' + status);
                                    }
                                });
                               
                                logger.info('Sending mail for report :' + report.name);
                                mailhelper.sendMailScheduledReport(report.id, fileName, report.name, new Date().toISOString(), function (err, info) {
                                    if (err) { console.log(err); throw err; }
                                    else
                                    { console.log(info); status = true; }
                                });
                               
                            })
                            .catch(err => {
                                console.log(report.id + " : " + report.name + 'Exception handling : ' + err);
                                status = false;
                                reportModel.updateReportStatus(report.id, err, jobattrs.nextRunAt, jobattrs.lastRunAt, function (status, err) {
                                    if (err)
                                    { console.log(err); throw err; }
                                    else
                                        logger.info('Report status updated successfully : ' + status);
                                });
                                throw err;
                            });
                        console.log("Submitted Request for schdeuler report " + report.name);
                    });
                    resolve(status);
                }
            });
        }
        catch (error)
        { console.log(error); reject(error) }
    });
}