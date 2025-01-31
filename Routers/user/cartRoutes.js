const express = require('express');
const cartController = require('../../Controllers/user/cartController');
const router = express.Router();
router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);
module.exports = router;