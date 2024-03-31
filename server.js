const express = require('express');
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
const router = require('./routes/route');
const cors = require("cors")

const cloudinary = require("cloudinary").v2;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

const cloudinaryConnect=()=>{
    try{
        cloudinary.config({ 
            cloud_name: 'dcna3egem', 
            api_key: '545127449491245', 
            api_secret: 'uiXGXTvzorxTtccT2HA2s2gcrho' 
          });
    }
    catch(error)
    {
        console.log(error);
    }
}

cloudinaryConnect();

const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(express.json());
mongoose.connect('mongodb+srv://muskanj:Muskan123@cluster0.9jzx2xl.mongodb.net/')
    .then(() => {
        console.log('MongoDB connected.');
        app.listen(PORT,console.log(`Server started at http://localhost:${PORT}`));
    })
    .catch((error) => console.log(error));

app.use('/',router);


