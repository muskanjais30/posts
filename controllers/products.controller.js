const inventoryModel = require('../models/posts');



// async function uploadProducts(req,res) {
//     try {
//         const product = await inventoryModel.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(400).json({message : error.message});
//     }
// }

// app.post('/upload', multer.single('file'), async (req, res) => {
//     try {
//         // Get the filename returned by Multer
//         const filename = req.file.filename;

//         // Save the filename as the image URL in the database
//         const newInventoryItem = new Inventory({
//             postContent: req.body.postContent,
//             ClubName: req.body.ClubName,
//             CollegeName: req.body.CollegeName,
//             postImages: filename, // Store the filename as the image URL
//             votes: req.body.votes
//         });
//         await newInventoryItem.save();

//         res.status(201).json({ message: 'Inventory item created successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });


// async function updateProducts(req,res) {
//     try {
//         const {id} = req.params;
//         const product = await inventoryModel.findByIdAndUpdate(id, req.body);

//         if(!product) {
//             return res.status(400).json("Product not found.");
//         } else {
//             const updatedProduct = await inventoryModel.findById(id);
//             res.status(200).json(updatedProduct);
//         }

//     } catch (error) {
//         res.status(400).json({message : error.message});
//     }
// }

// async function getProducts(req,res) {
//     try {
//         const product = await inventoryModel.find({});
//         if(!product) {
//             return res.status(400).json("No product in the inventory.");
//         } else {
//             res.status(200).json(product);
//         }

//     } catch (error) {
//         res.status(200).json({message : error.message});
//     }
// }

// async function getProductsById(req,res) {
//     try {
//         const {id} = req.params;
//         const product = await inventoryModel.find(id);

//         if(!product) {
//             return res.status(400).json(`Product with ${id} not found.`);
//         } else {
//             res.status(200).json(product);
//         }
//     } catch (error) {
//         res.status(200).json({message : error.message});
//     }
// }

// module.exports = {
//     uploadProducts,
//     updateProducts,
//     getProducts,
//     getProductsById
// }