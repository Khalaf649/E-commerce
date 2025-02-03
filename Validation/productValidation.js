const expressValidator = require('express-validator');
const { body } = require('express-validator');
module.exports = [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('imageUrl').isURL().withMessage('Image URL must be a valid URL'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer')
]
