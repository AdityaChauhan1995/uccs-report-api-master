// processing functions for all adhoc newRequests
var constants = require('../config/constants')
    , reports = require('../model/report.js')
    , sql = ""
    , fs = require('fs')
    , readline = require('readline')
    , insertQueryHelper = require('../helpers/insertDummyTable.js')
    , insertAdhocQueryHelper = require('../helpers/insertDummyTableAdhoc.js')
    , logger = require('../logs/logger').Logger;



module.exports.prepareStmtAdhoc = async function (newRequest,reportType) {
    return new Promise(async (resolve, reject) => {
        sql = 'select ';
        let oper;
          console.log(newRequest.reportType +"   "+reportType)
        logger.info('Inside query prepare block '+ reportType+' query');
        try {

            newRequest.output.forEach(function (output, index) {
                sql += (index < newRequest.output.length - 1) ? constants[output.columnName] + "," : constants[output.columnName];
            });

            await reports.getReportById(newRequest.reportId, async function (error, reportOutput) {
                if (error || !reportOutput) {
                    logger.error("error in finding report details " + error);
                    reject(error);
                }
                else {
			
		console.log(reportOutput.queryConstant);
                    if (reportOutput.queryConstant == 'other_common_report') {
                        sql_tbl = constants.other_common_report_tbl;
                        sql_condition = constants.other_common_report_condition;
                        console.log(sql_tbl +   "     "+sql_condition);
                        if (sql.indexOf('SZFIELD2') > 0 || sql.indexOf('SZBRN') > 0) {
                            sql_tbl += ', col_mst_customer cmc ';
                            sql_condition += ' AND ctr.ICUSTOMERSEQNO=cmc.ICUSTOMERSEQNO and ctr.szorgcode=cmc.SZORGCODE and ctr.SZPARTITIONCODE=cmc.SZPARTITIONCODE';
                        }
                        if (sql.indexOf('DTLASTDEACT') > 0 || sql.indexOf('irelatedacctcount') > 0) {
                            sql_tbl += ', COL_TRN_ACCOUNTSTATUSREPORT cta ';
                            sql_condition += ' and ctr.IAGREEMENTSEQNO=cta.IAGREEMENTSEQNO and  ctr.szorgcode=cta.SZORGCODE and ctr.SZPARTITIONCODE=cta.SZPARTITIONCODE';
                        }
                        if (sql.indexOf('CZEROLUTIONFLAG') > 0 || sql.indexOf('DTZEROLUTIONDATE') > 0) {
                            sql_tbl += ', COL_TRN_case ctc ';
                            sql_condition += ' and ctr.IAGREEMENTSEQNO=ctc.IAGREEMENTSEQNO and  ctr.ICUSTOMERSEQNO=ctc.ICUSTOMERSEQNO and ctr.szorgcode=ctc.SZORGCODE and ctr.SZPARTITIONCODE=ctc.SZPARTITIONCODE';
                        }
                        sql += sql_tbl + sql_condition + ' and ';
                    }
                    else
                        sql = sql + constants[reportOutput.queryConstant];
                    //Synchronous for loop

                    sql = sql + await startLoop(newRequest.inputs,reportType);

                    logger.debug("Query preapred for " + newRequest.reportName + " : " + sql);
                    resolve(sql);
                }
            });
        }
        catch (err) { reject(err); }
    });
}



// Query for standard newRequest 
module.exports.prepareStmtStandard = async function (newRequest,reportType) {

    return new Promise(async (resolve, reject) => {
        let sql = "";
        let userInput = "";
        console.log(newRequest.reportType +"   "+reportType);
        logger.info('Inside query prepare block for '+ reportType+' newRequest with user input given ')
        try {

            //var reportOutput = await 

            await reports.getReportById(newRequest.reportId, async function (error, reportOutput) {
                if (error || !reportOutput) {
                    logger.error("error in finding report details " + error);
                    reject(error);
                }
                else {
                    try {
                        sql = constants[reportOutput.queryConstant];
                        //Synchronous for loop
                        if (reportOutput.queryConstant != 'dialer_Report_query')
                            sql = sql + await startLoop(newRequest.inputs,reportType);
                        logger.debug("Query preapred for " + newRequest.reportName + " : " + sql);
                        resolve(sql);
                    }
                    catch (err) { reject(err) }
                }
            });

        }
        catch (err) { reject(err); }
    });
}



async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

const startLoop = async (inputData,reportType) => {
    let sql = "";
    try {

        await asyncForEach(inputData, async (input, index) => {
            console.log(input)

console.log(index)
            sql += await waitForValues(input, index,reportType);
        })
        console.log(sql)
        return sql;

    }
    catch (error) {
        throw error
    }
}



const waitForValues = function (input, index,reportType) {

    return new Promise(async (resolve, reject) => {

        var sql = "";
        let insertionResult = "";
        if (index != 0)
            sql = sql + " and ";

        console.log("im here" +input.isDateColumn)

        if (input.isDateColumn) {
            sql = sql + input.columnName + " between '" + input.startDate + "' and '" + input.endDate + "'";
            console.log("inside sql eurry"+sql)
            resolve(sql);
        }
        else if (input.value) {
            logger.debug("inside single value " + input.value)
            sql = sql + input.columnName + " " + input.operator + " '" + input.value + "'";
            resolve(sql);
        }
        else if (input.values.length) {
            logger.debug("inside multiple value " + input.value)
            sql = sql + input.columnName + " in (";
            for (let i = 0; i < input.values.length; i++) sql += (i > 0) ? "," + "'" + input.values[i] + "'" : "'" + input.values[i] + "'";
            sql += ")";
            resolve(sql);
        }
        else if (input.filePath) {
            let filePath = "./uploads/" + input.filePath;
            if (fs.existsSync(filePath)) {
                try {
                    userInput = await read(filePath, { start: 1 });
                    if(userInput.length)
                    {
                        if (reportType == "Standard Report")
                        {
                            insertionResult = await insertQueryHelper.insertDummyAcct(userInput);
                            sql = input.columnName + " IN (select trim(SZACCOUNT_NO) from acc_dummy) ";
                        }
                        else if (reportType == "Adhoc Report")
                        {
                           insertionResult = await insertAdhocQueryHelper.insertDummyAcct(userInput);
                            sql = input.columnName + " IN (select trim(SZACCOUNT_NO) from acc_dummy_adhoc) ";
                        }
                        resolve(sql);   
                    }
                    else 
                        reject("Not able to read file uploaded by user");

                }
                catch (err) { reject(err) }
            }
            else
                reject('No such file or directory' + input.filePath)
        }
        else
            resolve("");

    })
}

async function read(file) {
    return new Promise((resolve, reject) => {
        let inputLine = [];
        let inputData = [];
        const label = `read2-${file}`;
       // var re = new RegExp("^([0-9]{1,})$");
        console.time(label);
        const stream = readline.createInterface({
            input: fs.createReadStream(file)
        });

        stream.on('line', data => {
            inputLine = [];
            //if (re.test(data)) {
                inputLine.push(data);
                inputData.push(inputLine);
            //}

        });
        stream.on('close', () => {
            console.timeEnd(label);
            resolve(inputData);
        });

    });
}
