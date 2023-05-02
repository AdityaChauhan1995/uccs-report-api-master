var router = require('express').Router()
    , oracledb = require('oracledb')
    , async = require('async')
    , config = require('../config')
    , constants = require('../config/constants')
    ,logger = require('../logs/logger').Logger
    ,fs = require('fs')
    ,
stringify = require('csv-stringify');


oracledb.fetchAsString = [oracledb.DATE, oracledb.NUMBER];
oracledb.poolMax = 10;


module.exports.executeReport = function (sql,fileName,reportName) {
    return new Promise(async function (resolve, reject) {

        let conn;
        let error;
        var startTime = Date.now();
        var rowsProcessed = 0;
	let headers="";
    let record="";
        try {

            conn = await oracledb.getConnection(config.oracle);
            //if (conn)
                //logger.info('Connected to DB');

            let stream = await conn.queryStream(
                sql,
                //  [constant.maxRows],
                [],
                {
                    fetchArraySize: constants.batchSize// Return the result as Object
                }
            );
            var file = fs.createWriteStream(fileName, { flags: 'w' });	
		stream.on('metadata', function (metadata) {
                
			metadata.forEach(function (columns, index) {                    
				  headers += (index < metadata.length - 1) ? '"' + columns.name + '",' : '"' + columns.name + '"';                
			});
           file.write(headers + "\r\n");
            
		});
           /* stream.pipe(stringify())
            .on('data', () => rowsProcessed++ )
            .pipe(file)
            .on('finish', () => 
            { console.log('File write done for report '+fileName);
                resolve(file);
            });*/

            stream.on('data', (row) => {
               // file.write(JSON.stringify(row)+ "\r\n" );
               record="";
               row.forEach(function (data, index) {                    
                  record += (index < row.length - 1) ? '"' + data + '",' : '"' + data + '"';                
                });
                file.write(record+ "\r\n" );
                 rowsProcessed++ ;
            });


            stream.on('error', function (error) {
                console.log('Stream error ' + error);
                logger.error('Stream error ' + error);
                logger.error("Query execution fails  --> " + sql);
                doRelease(conn);
                reject(error);
            });

            // stream.on('data', function (row) {
            //     rowsProcessed++;
            // });

            stream.on('end', function () {
                var t = ((Date.now() - startTime) / 1000);
                console.log("Report: "+reportName+' queryStream():       rows: ' + rowsProcessed +
                    ', batch size: ' + constants.batchSize + ', seconds: ' + t);
                doRelease(conn);
                file.end();
                resolve(rowsProcessed);
            });

        } catch (err) {
             logger.error('Error while retreving user detail from UCCS Database!', err);
             console.log('Error while retreving user detail from UCCS Database!', err);
            reject(err);
            throw err;
        }
    });

}


function doRelease(connection) {
    //logger.info('at db connection close')
    connection.close(
        function (err) {
            if (err) { console.error(err.message); throw err; }
        });
}

