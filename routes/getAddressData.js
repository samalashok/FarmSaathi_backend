const express= require('express');
const addressSchema= require('../models/addressData');
const router= express.Router();

router.post('/getAddress', async (req, res)=>{
    await addressSchema.find({email: req.body.email}).then((data)=>res.json(data)).catch(err=>console.error(err))
})

module.exports = router