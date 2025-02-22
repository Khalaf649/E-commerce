const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters long'),

    body('price')
        .notEmpty().withMessage('Price is required')
        .isFloat({ gt: 0 }).withMessage('Price must be a positive number'),

    body('description')
        .trim()
        .notEmpty().withMessage('Description is required')
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('quantity')
        .notEmpty().withMessage('Quantity is required')
        .isInt({ gt: 0 }).withMessage('Quantity must be a positive integer')
];
