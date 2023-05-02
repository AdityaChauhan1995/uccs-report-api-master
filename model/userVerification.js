var router = require('express').Router();
var oracledb = require('oracledb');
var dbConfig = require('../config/oracleconfig.js');
var async = require('async');


const config = {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
};


module.exports.getUsercode = async function (username,callback) {
  let conn;
  let result;
  let error;
  let rowcount;
  let userCount;
  
  try {
    conn = await oracledb.getConnection(config);

    result = await conn.execute(
      'select count(1) from sec_mst_user where  CACCOUNTACTIVATEDYN='+"'Y'"+' and szusercode = :id',
      [username],
      // {
      //   resultSet: true        // return a ResultSet.  Default is false
      // }
    );
  
    userCount=result.rows[0];
    rowcount=result.rows.length;
    doClose(conn,result);
    
    //res.send(rowCount);
  } catch (err) {
    console.log('Error while retreving user detail from UCCS Database!', err);
    error=err;
   
  } finally {
    if (conn) {
      try {
        //await conn.close();
        await  doRelease(conn);        
      } catch (err) {
        console.error(err);
        error=err;
      }
    }
    callback(userCount,error);
    
  }
  console.log('123');
 // doRelease(conn);
  
 
}




function doRelease(connection) {
  connection.close(
    function(err) {
      if (err) { console.error(err.message); }
    });
    // callback(rowCount,err);
}

function doClose(connection, result) {
  result.close(
    function(err) {
      if (err) { console.error(err.message); }
      doRelease(connection);
    });
}

