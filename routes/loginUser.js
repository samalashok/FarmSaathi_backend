const express = require('express');
const router = express.Router();
const userModel = require('../models/userData');
const secretCode = 'hgqwyet247980euoiqwrfh203u23rujk23hr9238rh'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/loginUser', async (req, res) => {
    let email = req.body.email;
    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.status(200).json({ user: "notfound", msg: 'Email not resistered, please sign up' });
    }
    else {
        const comp = await bcrypt.compare(req.body.password, user.password)
        if (comp) {
            const data = {
                user: { id: user.id }
            }
            const authToken = jwt.sign(data, secretCode);
            return res.status(200).json({ authToken:authToken,phone:user.phone, name: user.name, email: user.email, msg: 'loggedin successfully' });
        }
        else {
            return res.status(200).json({ msg: 'incorrect password, try again' });
        }
    }
})

module.exports = router