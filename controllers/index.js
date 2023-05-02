var express = require('express')
var router = express.Router()
  ,agenda = require('../batch/consumer.js');

router.get('/v1', function (req, res) {
    res.send({
        code: 0,
        message: 'v1 running'
    })
})
router.use('/v1/user', require('./user'));
router.use('/v1/request', require('./request'));
router.use('/v1/report', require('./report'));

module.exports = router;
