const {Schema,SchemaTypes,mongoose} =require('mongoose');
const ProductSchema=new Schema({
    name:{  // name of the product
        type:String,
        required:true
    },  
    price:{  // price of the product
        type:Number,
        required:true
    },
    description:{  // description of the product
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true// image urls of the product
    },
    quantity:{  // quantity of the product
        type:Number,
        required:true,
        default:0
    }
})  // create a schema   
module.exports=Product=mongoose.model('product',ProductSchema);  // create a model and export it 