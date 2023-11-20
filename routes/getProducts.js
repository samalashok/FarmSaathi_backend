const express = require('express');
const router = express.Router();
const productModel = require('../models/productData')

router.get('/getProducts', async function (req, res) {
    await productModel.find().then((products) => res.json(products)).catch((err) => res.json(err))}
);

module.exports = router