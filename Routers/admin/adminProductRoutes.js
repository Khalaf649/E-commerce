const express=require('express');
const adminProductController=require('../../Controllers/admin/adminProductController');
const ProductValidator=require('../../Validation/productValidation');
const router=express.Router();
router.get('/',adminProductController.getAllProducts)
 router.get('/:id',adminProductController.getProductById)
 router.post('/',ProductValidator, adminProductController.addProduct)
 router.put('/:id',adminProductController.updateProduct)
 router.delete('/:id',adminProductController.deleteProduct)
module.exports=router;