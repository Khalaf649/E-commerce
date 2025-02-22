const { body } = require('express-validator');
const mongoose = require('mongoose');

module.exports.addCartValidation = [
    body('products')
        .isArray().withMessage('Products must be an array')
        .notEmpty().withMessage('Products array cannot be empty')
        .custom((value) => {
            value.forEach(product => {
                if (!product.productID || !product.quantity) {
                    throw new Error('Each product must have a valid productID and quantity');
                }
                if (product.quantity <= 0 || isNaN(product.quantity)) {
                    throw new Error('Quantity must be a positive number');
                }
                if (!mongoose.Types.ObjectId.isValid(product.productID)) {
                    throw new Error('Invalid productID');
                }
            });
            return true;
        })
        .withMessage('Invalid product data'),

    
];