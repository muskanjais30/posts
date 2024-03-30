const express = require('express');
const router = express.Router();
const multer = require('../middleware/uploadImage');
const { GridFSBucket } = require('mongodb');
const mongoose = require('mongoose');
const Inventory = require('../models/posts');
const cloudinary = require("cloudinary").v2;

function isFiletypeSupported(type, supportedfile) {
    return supportedfile.includes(type);
}

async function uploadfileoncloudinary(file, folder) {
    const options = { folder };
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

router.post('/upload', async (req, res) => {
    try {
        const { postContent, ClubName, CollegeName, domain } = req.body;
        // console.log(postContent, ClubName, CollegeName, votes);

        const file = req.files.postImages;
        console.log(file);

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType)

        if (!isFiletypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            })
        }

        const response = await uploadfileoncloudinary(file, "fileupload");
        console.log("response", response);

        const newInventoryItem = new Inventory({
            postContent,
            ClubName,
            CollegeName,
            domain,
            imageUrl: response.secure_url,
        });

        await newInventoryItem.save();

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "File uploaded!!"
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
});

router.get('/posts', async (req, res) => {
    try {
        const inventoryItems = await Inventory.find();
        res.json({
            success: true,
            data: inventoryItems
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error retrieving posts from the database"
        });
    }
});

module.exports = router;
