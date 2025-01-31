const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const WishlistSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true,  // User who owns the wishlist
    },
    products: [
        {
            type: SchemaTypes.ObjectId,
            ref: "Product",  // Product added to the wishlist
            required: true,
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,  // Timestamp for wishlist creation
    }
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
