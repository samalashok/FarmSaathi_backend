const express= require('express');
const router=express.Router();
const cartSchema=require('../models/cartData')
router.post('/addCartToDB',async(req,res)=>{
    await cartSchema.deleteMany({email: req.body.email})
    await cartSchema.create({
        email: req.body.email,
        data: req.body.data
    })
})

module.exports = router