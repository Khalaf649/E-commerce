const express = require('express');
const router = express.Router();
const wishlistController = require('../../Controllers/user/wishlistController');
router.get('/', wishlistController.getAllWishlists);
router.get('/:id', wishlistController.getWishlistById);
router.post('/', wishlistController.addWishlist);
router.put('/:id', wishlistController.updateWishlist);
router.delete('/:id', wishlistController.deleteWishlist);
module.exports = router;