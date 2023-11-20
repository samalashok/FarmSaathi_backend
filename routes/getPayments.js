const express = require('express');
const router = express.Router();
const paymentSchema = require('../models/paymentData')

router.post('/getPayments', async function (req, res) {
    await paymentSchema.find({ email: req.body.email }).then((payments) => res.json(payments)).catch((err) => res.json(err))
});

module.exports = router