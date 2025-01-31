const express=require('express');
const adminUserController=require('../../Controllers/admin/adminUserController');
const router=express.Router();
router.get('/',adminUserController.getAllUsers)
router.get('/:id',adminUserController.getUserById)
router.post('/', adminUserController.addUser)
router.put('/:id',adminUserController.updateUser)
router.delete('/:id',adminUserController.deleteUser)
module.exports=router;