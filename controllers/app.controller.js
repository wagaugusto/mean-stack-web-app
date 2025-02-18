﻿var express = require('express');
var router = express.Router();

// use session auth to secure the angular app files
router.use('/', function (req, res, next) {
    if (req.path !== '/login' && !req.session.token) {
        return res.redirect('/login?returnUrl=' + encodeURIComponent('/app' + req.path));
    }

    next();
});

// make JWT token available to angular app
router.get('/token', function (req, res) {
    res.send(req.session.token);
});

// make userId  available to angular app
router.get('/userId', function (req, res) {
    res.send(req.session.userId);
});

// make userId  available to angular app
router.get('/roupaId', function (req, res) {
    res.send(req.session.userId);
});

// serve angular app files from the '/app' route
router.use('/', express.static('app'));

module.exports = router;