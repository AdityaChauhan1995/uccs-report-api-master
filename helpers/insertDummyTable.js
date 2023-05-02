var oracledb = require('oracledb');
var config = require('../config');

const truncateSql = "TRUNCATE TABLE acc_dummy";
const insertSql = "INSERT INTO acc_dummy(SZACCOUNT_NO) values (:1)";

const options = {
    autoCommit: true,
    batchErrors: true,
    bindDefs: [
        { type: oracledb.STRING, maxSize: 500 }
    ]
};

module.exports.insertDummyAcct = function (inputData) {

    return new Promise(async function (resolve, reject) {
        let conn;
        let result;
        try {
            conn = await oracledb.getConnection(config.oracle);

            await conn.execute(truncateSql);

            result = await conn.executeMany(insertSql, inputData, options);

            console.log("Result is:", result);
            resolve(result);

        } catch (err) {
            console.error("Error in insertion : "+err);
            reject(err);
        } finally {
            if (conn) {
                try {
                    await conn.close();
                } catch (err) {
                    console.error(err);
                    reject(err);
                }
            }
        }
    });
}

