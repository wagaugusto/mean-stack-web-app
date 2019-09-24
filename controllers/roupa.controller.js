var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

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
        return res.redirect('/roupas');
    });
});





module.exports = router;