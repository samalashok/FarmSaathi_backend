const instance = require('../pages/razorpay')
const express = require('express')
const router = express.Router()

router.post('/createOrder', async (req, res) => {
    var options = {
        amount: parseInt(req.body.amount) * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: req.body.receipt
    };
    instance.orders.create(options, function (err, order) {
        if(err)return res.status(400).json({success:true,msg:'something went wrong, Try again'})
        else return res.status(200).json({order,success:true,msg:'order created successfully'});
    });
})

module.exports = router
