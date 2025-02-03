const {SchemaType,SchemaTypes} =require('mongoose');
const UserSchema=new Schema({
    name:{  // name of the user
        type:String,
        required:true
    },  
    email:{  // email of the user
        type:String,
        required:true
    },
    password:{  // password of the user
        type:String,
        required:true
    },
    isAdmin:{  // whether the user is an admin or not
        type:Boolean,
        required:true,
        default:false
    },
    cartID:{  // cart id of the user
        type:SchemaTypes.ObjectId,
        ref:'cart'
    },
    ordersID:[{  // orders of the user
        type:SchemaTypes.ObjectId,
        ref:'order'
    }],
    wishlistID:{  // wishlist of the user
        type:SchemaTypes.ObjectId,
        ref:'wishlist'
    }
})  // create a schema
module.exports=User=mongoose.model('user',UserSchema);  // create a model and export it