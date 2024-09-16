const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const VerifyToken = require('../verifyToken');

route.post('/product', VerifyToken.VerifyToken, productController);

module.exports = router;