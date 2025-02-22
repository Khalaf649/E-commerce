const {Schema, model} = require('mongoose');
const OrderSchema = new Schema({
    user: {  
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    products: [{  // Array of products added to the order
        product: {  
            type: Schema.Types.ObjectId,
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
    },
    createdAt: {  
        type: Date,
        default: Date.now
    },
    location: {  
        type: String,
        required: true
    },
    status: {  
        type: String,
        required: true,
        default: "Pending"
    },
    
});