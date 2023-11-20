const express = require('express');
const router = express.Router();
const orderSchema = require('../models/orderData')

router.post('/getOrders', async function (req, res) {
    await orderSchema.find({ email: req.body.email }).then((orders) => res.json(orders)).catch((err) => res.json(err))
});

module.exports = router