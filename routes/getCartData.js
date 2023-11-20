const express = require('express');
const router = express.Router();
const cartSchema = require('../models/cartData')

router.post('/getCartData', async function (req, res) {
    await cartSchema.find({ email: req.body.email }).then((products) => res.json(products)).catch((err) => res.json(err))
});

module.exports = router