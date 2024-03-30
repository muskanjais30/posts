const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');


const storage = new GridFsStorage({
    url: "mongodb+srv://muskanj:Muskan123@cluster0.9jzx2xl.mongodb.net/",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return { filename }; // Return filename as an object
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`
        }
    }
});

module.exports = multer({ storage });
