const {Schema,SchemaTypes} =require('mongoose');
const CartSchema = new Schema({
    user: {  
        type: SchemaTypes.ObjectId,
        ref: "user",
        required: true
    },
    products: [{  // Array of products added to the cart
        product: {  
            type: SchemaTypes.ObjectId,
            ref: "product",
            required: true
        },
        quantity: {  
            type: Number,
            required: true,
            min: 1  // Prevent negative quantities
        }
    }],
    totalPrice: {  
        type: Number,
        required: true,
        default: 0
    },
    totalQuantity: {  
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model("cart", CartSchema);
