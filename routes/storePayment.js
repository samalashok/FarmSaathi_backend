const express= require('express');
const router= express.Router();
const paymentSchema= require('../models/paymentData');

router.post('/storePayment',async (req, res) => {
    await paymentSchema.create({
        email: req.body.email,
        order_id: req.body.order_id,
        payment_id: req.body.payment_id,
        amount:req.body.amount,
        signature: req.body.signature
    }).then(res.json({success:true})).catch()
})

module.exports = router