const express = require('express');
const orderController = require('../../Controllers/user/orderController');
const router = express.Router();
router.get('/', orderController.getOrders);
router.post('/', orderController.addOrder);

module.exports = router;