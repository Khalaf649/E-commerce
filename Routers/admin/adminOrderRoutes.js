const express=require('express');
const adminOrderController=require('../../Controllers/admin/adminOrderController');
const router=express.Router();
router.get('/',adminOrderController.getAllOrders)
router.get('/:id',adminOrderController.getOrderById)
router.post('/', adminOrderController.addOrder)
router.put('/:id',adminOrderController.updateOrder)
router.delete('/:id',adminOrderController.deleteOrder)
module.exports=router;