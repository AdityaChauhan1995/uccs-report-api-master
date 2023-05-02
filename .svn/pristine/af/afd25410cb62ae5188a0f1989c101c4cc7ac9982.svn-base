
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , reports = require('./report');

var Request = new Schema({
    "reportId": "",
    "reportName": "",
    "reportType": "",
    "userid": "",
    "createdDate": "",
    "estimatedDuration": "",
    "completedDate": "",
    "downloadUrl": "",
    "status": { type: String, default: "New" },
    "inputs": [
        {
            "seq": { type: Number, default: 0 },
            "columnName": "",
            "operator": "",
            "value": "",
            "values": [],
            "filePath": "",
            "isDateColumn":  { type: Boolean, default: false },
            "startDate" :"",
            "endDate" : ""
        }
    ],
    "output": [
        {
            "seq": { type: Number, default: 0 },
            "columnName": ""
        }
    ]
}
);

var requestModel = mongoose.model('requests', Request);


module.exports = requestModel;

module.exports.findNewRequestStandard = function (type, callback) {
    var query = {
        status: "New", $or: [{ completedDate: { "$exists": true, "$eq": "" } }, { completedDate: null }, { completedDate: { "$exists": true } }]
        , reportType: type
    };
    var options = {};
    console.log("inside find new request " + type);
    requestModel.find(query, function (error, data) {

        if (error || (data.length == 0))
            callback(error ? error : new Error('No new request to process'), null);
        else
            callback(null, data);
    });

}


module.exports.updateRequestStatus = function (id, file, status, callback) {
    requestModel.findByIdAndUpdate(id, { completedDate: new Date().toISOString(), downloadUrl: file, status: status },
        { returnNewDocument: true }, function (err, newrequest) {
            if (err)   callback(false, err);
            else callback(true, null);
        });
}


module.exports.createRequest = function (data, reportId, { _id }, callback) {

    reports.findReportById(reportId, function (reportdata, err) {

        if (err || !reportdata)
            callback({ code: -1, message: 'Invalid Report Id' });
        else {
            var newRequest = new requestModel({
                reportId: reportId,
                reportName: reportdata.name,
                reportType: reportdata.type,
                userid: _id,
                createdDate: new Date(),
                estimatedDuration: reportdata.estimatedDuration,
                completedDate: "",
                downloadUrl: "",
                inputs: data.inputs,
                output: data.output
            });

            newRequest.save(function (err, doc) {
                if (err || !doc)
                    callback({ code: -1, message: 'Error creating request.' });
                else
                    callback({ code: 0, message: 'Request created - SUCCEES' })
            });
        }

    });
}

module.exports.findRequest = function ({ _id }, callback) {
//    var query = { userid: _id };
var date = new Date();
console.log( new Date(date.setDate(date.getDate() - 20)).toLocaleString());
    var query = { userid: _id , createdDate : {$gte: new Date(date.setDate(date.getDate() - 20))} };
    var options = {};
    requestModel.find(query, 'reportName reportType createdDate completedDate estimatedDuration downloadUrl', function (err, data) {
        if (err || !data || (data.length == 0))
            callback({ code: -1, message: 'No Request found for user' });
        else {
            callback({
                code: 0, message: "SUCCESS",
                response: {
                    "requests": data
                }
            });

        }
    });

}