const express = require('express');
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
const router = require('./routes/route');

// const multer = require('../middleware/uploadImage'); // Assuming you have the Multer configuration in a separate file
// const { GridFSBucket } = require('mongodb');
// const upload = require("./routes/uploadImage");
// const Grid = require('gridfs-stream');
// let gfs;
// connection();

// const conn = mongoose.connection;
// conn.once("open", function () {
//     gfs = new mongoose.mongo.GridFSBucket(conn.db, {
//         bucketName: "photos"
//     });
// });

// app.get('file/filename',async (req, res) => {
//     try {
//         const file = await gfs.files.findOne({ filename: req.params.filename });
//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(res);
//     } catch (error) {
//         res.send("not found");
//     }
// })

const cloudinary = require("cloudinary").v2;

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


