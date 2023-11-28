const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
//nfpk wqqo xdqt iigp
router.post('/forgotPass', (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wefarmsaathi@gmail.com',
            pass: 'nfpk wqqo xdqt iigp'
        }
    });

    var mailOptions = {
        from: 'wefarmsaathi@gmail.com',
        to: 'techsashok@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})