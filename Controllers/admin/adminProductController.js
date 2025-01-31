const express = require('express');
const Product = require('../../Models/Product');
const upload = require('../../config/multer');
const imageAws = require('../../Utils/imageAWS')
exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ products: products, message: 'All products fetched successfully' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
}


exports.getProductById = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        const error = new Error('Product id is required');
        error.statusCode = 400;
        return next(error);
    }
    try {
        const product = await Product.findById(id);
        if (!product) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ product: product, message: 'Product fetched successfully' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
}
exports.addProduct = async (req, res, next) => {
    // Handle the upload first
    upload(req, res, async (err) => {
        if (err) {
            // Handle multer errors
            return next(new Error('File upload failed: ' + err.message));
        }

        const { name, price, description, quantity } = req.body;

        // Check if image is provided
        if (!req.file) {
            const error = new Error('Image is required');
            error.statusCode = 400;
            return next(error);
        }

        // Create a new product object


        try {
            // Upload the image to S3 and get the URL
          const fixedPart=  `${Date.now()}-${req.file.originalname}`;
            const s3Data = await imageAws.uploadFileToS3(
                req.file.buffer,
                fixedPart, // Unique filename with timestamp
                req.file.mimetype
            );
            console.log(s3Data);
            // Create the product object
            const product = new Product({
                quantity,
                name,
                price,
                description,
            });
            // Store the S3 image URL in the product
            product.imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/Productimages/${fixedPart}`;



            // Save the product in the database
            await product.save();
          //  console.log(product);
            // Return response
            return res.status(201).json({
                message: 'Product added successfully',
                productId: product._id, // Optionally return the product ID
            });

        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            return next(err);
        }
    });
};
exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        const error = new Error('Product id is required');
        error.statusCode = 400;
        return next(error);
    }
    try {
        const product = await Product.findById(id);
        if (!product) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }
        // Delete the image from S3
        const key = product.imageUrl.split('/').slice(-2).join('/');
        await imageAws.deleteFileFromS3(key);
        // Delete the product from the database
        await Product.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
}
exports.updateProduct = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        const error = new Error('Product id is required');
        error.statusCode = 400;
        return next(error);
    }
    try {
        const product = await Product.findById(id);
        if (!product) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }
        const { name, price, description, quantity } = req.body;
        console.log(name, price, description, quantity);
        // Update the product object
        product.name = name;
        product.price = price;
        product.description = description;
        product.quantity = quantity;
        upload(req, res, async (err) => {
            if (err) {
                // Handle multer errors
                return next(new Error('File upload failed: ' + err.message));
            }
            if (req.file) {
                // Delete the old image from S3
                const key = product.imageUrl.split('/').slice(-2).join('/');
                await imageAws.deleteFileFromS3(key);
                // Upload the new image to S3
                const fixedPart=  `${Date.now()}-${req.file.originalname}`;
                const s3Data = await imageAws.uploadFileToS3(
                    req.file.buffer,
                    fixedPart, // Unique filename with timestamp
                    req.file.mimetype
                );
                // Store the S3 image URL in the product
                product.imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/Productimages/${fixedPart}`;
            }
        });
        await product.save();
        return res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
}
