require('dotenv').config();  // load environment variables
const express=require('express');
const app=express();    // create an express app   
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const port=process.env.PORT
const MONGO_URI=process.env.MONGO_URI;
app.use(cors());
app.use(express.json());
const ErrorHandler=require('./Middlewares/errorHandler.js')



const adminProductRouter=require('./Routers/admin/adminProductRoutes')
const adminCartRouter=require('./Routers/admin/adminCartRoutes')
const adminUserRouter=require('./Routers/admin/adminUserRoutes')
const adminOrderRouter=require('./Routers/admin/adminOrderRoutes')
const adminWishlistRouter=require('./Routers/admin/adminWishlistRoutes')

app.use('/admin/products',adminProductRouter);   // use the product router
app.use('/admin/carts',adminCartRouter);    // use the cart router
app.use('/admin/users',adminUserRouter);    // use the user router
app.use('/admin/orders',adminOrderRouter);    // use the order router
app.use('/admin/wishlists',adminWishlistRouter);    // use the wishlist router


const authRouter=require('./Routers/user/authRoutes.js')
const cartRouter=require('./Routers/user/cartRoutes.js')
const orderRouter=require('./Routers/user/orderRoutes.js')
const productRouter=require('./Routers/user/productRoutes.js')
const userRouter=require('./Routers/user/userRoutes.js')
const wishlistRouter=require('./Routers/user/wishListRoutes.js')


app.use('/auth',authRouter);   // use the auth router
app.use('/carts',cartRouter);    // use the cart router
app.use('/orders',orderRouter);    // use the order router
app.use('/products',productRouter);    // use the product router
app.use('/users',userRouter);    // use the user router
app.use('/wishlists',wishlistRouter);    // use the wishlist router





mongoose.connect(MONGO_URI).then(()=>{
    console.log("Database connected");
    app.listen(port,()=>{
        console.log("Server is running on port "+port);
    });
}).catch((err)=>{
    console.log(err);
})



app.use(ErrorHandler);