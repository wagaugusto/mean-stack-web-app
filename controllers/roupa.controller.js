var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
    request.get({
    url: config.apiUrl + '/roupas/register',
    form: req.body,
    json: true
    }, function (error, response, body) {
            if (roupas) {
                res.send(response);
            } else {
                return res.render('estoque', { error: 'An error occurred' });
            }    
            return res.redirect('/estoque');
        });
});

router.get('/:RoupaId', function (req, res) {
    request.get({
        url: config.apiUrl + '/' + RoupaId,
        form: req.body,
        json: true
        }, function (error, response, body) {
                if (roupa) {
                    res.send(response);
                } else {
                    return res.render('estoque', { error: 'An error occurred' });
                }    
                // return to login page with success message
                return res.redirect('/estoque');
            });
});

router.put('/:RoupaId', function (req, res) {
    // register using api to maintain clean separation between layers
    request.put({
        url: config.apiUrl + '/' + RoupaId,
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.render('update', { error: 'An error occurred' });
        }

        if (response.statusCode !== 200) {
            return res.render('update', {
                error: response.body
            });
        }

        // return to login page with success message
        req.session.success = 'Update successful';
        return res.redirect('/estoque');
    });
});



router.post('/register', function (req, res) {
    // register using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/roupas/register',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.render('register', { error: 'An error occurred' });
        }

        if (response.statusCode !== 200) {
            return res.render('register', {
                error: response.body
            });
        }

        // return to login page with success message
        req.session.success = 'Registration successful';
        return res.redirect('/roupa');
    });
});





module.exports = router;