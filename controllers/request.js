var router = require('express').Router()
    , request = require('../model/request')
    , multer = require('multer')
    , storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname + '_' + Date.now() + '_' + req.query.user._id)
        }
    })
    , upload = multer({ storage: storage })

var http = require('http');
var fs = require('fs');


router.get('/', function (req, res, next) {
    request.findRequest(req.query.user, function (response) {
        if (response.code === 0) {
            res.status(200).json(response);
        } else {
            res.status(500).json(response);
        }
    });
});


router.post('/', function (req, res, next) {

    const { reportId, user } = req.query;
    request.createRequest(req.body,
        reportId,
        user,
        function (response) {
            if (response.code === 0) {
                res.status(201).json(response);
            } else {
                res.status(400).json(response);
            }
        });

});


router.post('/fileUpload', upload.any(), function (req, res, next) {

    let response = [];
    let filepath;
    let fieldname;

    if (!req.files)
        res.status(204).send();
    else {
        req.files.forEach(function (file, index, arr) {
            filepath = file.filename
            fieldname = file.fieldname
            response.push({ "columnName": fieldname, "filepath": filepath });
        });
        res.status(200).json(response);
    }

});


router.get('/filedownload', function (req, res, next) {

    var downloadUrl=req.query.downloadUrl; 
    res.download(downloadUrl);
  

});





module.exports = router;