const express = require('express');
const router = express.Router();
const productController = require('../../Controllers/user/productController');
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
module.exports = router;