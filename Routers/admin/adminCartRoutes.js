const express=require('express');
const router=express.Router();
const adminCartController=require('../../Controllers/admin/adminCartController');
router.get('/',adminCartController.getAllCarts)
router.get('/:id',adminCartController.getCartById)
router.post('/',adminCartController.addCart)
router.put('/:id',adminCartController.updateCart)
router.delete('/:id',adminCartController.deleteCart)
module.exports=router;