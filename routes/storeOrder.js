const express= require('express');
const router= express.Router();
const orderSchema= require('../models/orderData');

router.post('/storeOrder',async (req, res) => {
    await orderSchema.create({
        email: req.body.email,
        order_details: req.body.order_details,
        cart_details: req.body.cart_details,
        address_details: req.body.address_details,
        status: req.body.status
    }).then(res.json({success:true})).catch()
})

module.exports = router