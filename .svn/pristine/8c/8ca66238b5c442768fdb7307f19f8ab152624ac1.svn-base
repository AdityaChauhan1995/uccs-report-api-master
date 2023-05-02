var router = require('express').Router()
    , User = require('../model/user');

router.post('/register', function (req, res) {
    User.register(req.body, function (response) {
        if (response.code === 0) {
            res.status(201).json(response);
        } else {
            res.status(400).json(response);
        }
    })
});

router.post('/login', function (req, res) {
    User.login(req.body, function (response) {
        if (response.code === 0) {
            res.status(200).json(response);
        } else {
            res.status(401).json(response);
        }
    })
});

router.get('/logout', function (req, res) {
    User.logout(req.query.user, function (response) {
        if (response.code === 0) {
            res.status(200).json(response);
        } else {
            res.status(500).json(response);
        }
    })
});

module.exports = router
