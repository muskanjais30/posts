const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        postContent : {
            type: String,
            required: true
        },
        ClubName : {
            type: String,
            required: true
        },
        CollegeName : {
            type: String,
            required: true
        },
        postImages : {
            type: String,
            required: false
        },
        votes: {
            type: Number,
            required: true,
            default: 0
        }        
    },
    {
        timestamps : true
    }
);

const inventoryModel = mongoose.model('Posts',postSchema);
module.exports = inventoryModel;