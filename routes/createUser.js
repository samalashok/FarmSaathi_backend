const express = require('express');
const router = express.Router();
const userModel = require('../models/userData')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const saltRounds = 10

router.post('/createUser', [body('email', 'not an email').isEmail(), body('name', 'invalid name').notEmpty(), body('password', 'password length lessthan 8').isLength({ min: 8 })], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.json({ msg: "enter valid credential" });
    }
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ msg: "email already registered, Please log in" });
    }
    else {
        const salt = await bcrypt.genSalt(saltRounds);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const us = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: secPass,
        })
        if (us) {
            return res.status(200).json({ success: true, msg: 'User created successfully' });
        }
        else {
            return res.status(200).json({ success: false, msg: "Something went wrong" });
        }
    }
});

module.exports = router