var express = require('express')
    , router = express.Router()
    , report = require('../model/report');


router.get('/', function (req, res, next) {
    report.findReport(function (response) {
        if (response.code === 0) {
            res.status(200).json(response);
        } else {
            res.status(500).json(response);
        }
    });
});


router.post('/', function (req, res, next) {
    report.createReport(req.body, function (response) {
        if (response.code === 0) {
            res.status(201).json(response);
        } else {
            res.status(400).json(response);
        }
    });

});

router.get('/adhoc-report-input', function (req, res, next) {

    const reportId = req.query.reportId;
    report.findAdhocReportInput(reportId,
        function (response) {
            if (response.code === 0) {
                res.status(200).json(response);
            } else {
                res.status(500).json(response);
            }
        });
});

router.get('/adhoc-report-output', function (req, res, next) {

    const reportId = req.query.reportId;
    report.findAdhocReportOutput(reportId,
        function (response) {
            if (response.code === 0) {
                res.status(200).json(response);
            } else {
                res.status(500).json(response);
            }
        });

});



router.post('/adhoc-report-input', function (req, res, next) {

    const reportId = req.query.reportId;
    report.createAdhocReportInput(req.body,
        reportId,
        function (response) {
            if (response.code === 0) {
                res.status(201).json(response);
            } else {
                res.status(400).json(response);
            }
        });
});

router.post('/adhoc-report-output', function (req, res, next) {

    const reportId = req.query.reportId;
    report.createAdhocReportOutput(req.body,
        reportId,
        function (response) {
            if (response.code === 0) {
                res.status(201).json(response);
            } else {
                res.status(400).json(response);
            }
        });

});

router.get('/scheduled-report', function (req, res, next) {
    const reportType = req.query.reportType;
    report.findScheduledReport(reportType,function (response) {
        if (response.code === 0) {
            res.status(200).json(response);
        } else {
            res.status(500).json(response);
        }
    });
});

module.exports = router;