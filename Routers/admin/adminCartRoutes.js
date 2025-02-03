const express=require('express');
const router=express.Router();
const adminCartController=require('../../Controllers/admin/adminCartController');
const cartValidator=require('../../Validation/cartAdminValidation');
router.get('/',adminCartController.getAllCarts)
router.get('/:id',adminCartController.getCartById)
router.post('/',cartValidator,adminCartController.addCart)
router.put('/:id',cartValidator,adminCartController.updateCart)
router.delete('/:id',adminCartController.deleteCart)
module.exports=router;