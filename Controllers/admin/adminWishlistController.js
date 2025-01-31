const express=require('express');
const adminWishlistController=require('../../Controllers/admin/adminWishlistController');
const router=express.Router();
router.get('/',adminWishlistController.getAllWishlists)
router.get('/:id',adminWishlistController.getWishlistById)
router.post('/', adminWishlistController.addWishlist)
router.put('/:id',adminWishlistController.updateWishlist)
router.delete('/:id',adminWishlistController.deleteWishlist)
module.exports=router;