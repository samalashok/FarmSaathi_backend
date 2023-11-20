const express = require('express');
const router = express.Router();
const cartSchema = require('../models/cartData')

router.post('/deleteCartData', async function (req, res) {
    await cartSchema.deleteMany({ email: req.body.email }).then(res.json({ success: true })).catch()
});
module.exports = router