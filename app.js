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
mongoose.connect(MONGO_URI).then(()=>{
    console.log("Database connected");
    app.listen(port,()=>{
        console.log("Server is running on port "+port);
    });
}).catch((err)=>{
    console.log(err);
})