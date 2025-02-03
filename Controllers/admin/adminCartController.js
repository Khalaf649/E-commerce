const Cart=require('../../Models/Cart');
const {validationResult}=require('express-validator');
exports.getAllCarts=async(req,res)=>{
    try{
        const carts=await Cart.find().populate('products.productID').populate('user');
        return res.status(200).json({carts:carts,message:'All carts fetched successfully'});
    }catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
        return next(err);
    }
}
exports.getCartById = async (req, res, next) => {
    const cartId = req.params.cartId;
    try {
        const cart = await Cart.findById(cartId).populate('products.productID').populate('user');
        if (!cart) {
            const error = new Error('Cart not found');
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ cart: cart, message: 'Cart fetched successfully' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
};
exports.deleteCart = async (req, res, next) => {
    const cartId = req.params.cartId;
    try {
        const cart = await Cart.findById(cartId);
        if (!cart) {
            const error = new Error('Cart not found');
            error.statusCode = 404;
            throw error;
        }
        await cart.remove();
        req.user.cartID = null;
        await req.user.save();
        return res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
}
exports.addCart = async (req, res, next) => {
    const { products } = req.body;
    const validationResultErrors = validationResult(req);
    if (!validationResultErrors.isEmpty()) {
        const error = new Error(validationResultErrors.array()[0].msg);
        error.statusCode = 422;
        return next(error);
    }
    try {
        const cart = await new Cart
            ({
                products: products,
                user: req.user.id
            });
            TotalPrice = 0;
            TotalQuantity = 0;
            products.forEach((product) => {
                TotalPrice += product.quantity * product.productID.price;
                TotalQuantity += product.quantity;
            });
            cart.totalPrice = TotalPrice;
            cart.totalQuantity = TotalQuantity;
        req.user.cartID = cart.id;
        await req.user.save();
        await cart.save();
        return res.status(201).json({ cart: cart, message: 'Cart added successfully' });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
}
exports.updateCart = async (req, res, next) => {
    const cartId = req.params.cartId;
    const validationResultErrors = validationResult(req);
    if (!validationResultErrors.isEmpty()) {
        const error = new Error(validationResultErrors.array()[0].msg);
        error.statusCode = 422;
        return next(error);
    }
    const { products } = req.body;
    try {
        const cart = await Cart.findById(cartId);
        if (!cart) {
            const error = new Error('Cart not found');
            error.statusCode = 404;
            throw error;
        }
        cart.products = products;
        TotalPrice = 0;
        TotalQuantity = 0;
        products.forEach((product) => {
            TotalPrice += product.quantity * product.productID.price;
            TotalQuantity += product.quantity;
        });
        cart.totalPrice = TotalPrice;
        cart.totalQuantity = TotalQuantity;
        await cart.save();
        return res.status(200).json({ cart: cart, message: 'Cart updated successfully' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return next(err);
    }
}




