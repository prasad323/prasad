const { Product } = require('./product.model');
const mongoose = require('mongoose');

module.exports = {
    addProduct: async (req, res) => {
        try {
            const { name, categoryId, price, description } = req.body;

            if (!mongoose.Types.ObjectId.isValid(categoryId)) {
                return res.status(400).send({
                    success: false,
                    message: 'Invalid categoryId'
                });
            }
            const newProduct = new Product({
                name,
                categoryId: mongoose.Types.ObjectId.createFromHexString(categoryId),
                price,
                description
            });

            const savedProduct = await newProduct.save();
            console.log("prasad", savedProduct)

            res.status(200).send({
                success: true,
                message: "Prduct added successfully",
                data: savedProduct
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: "failed to add product",
                error: error.message
            });
        }
    },

    bulkaddProduct: async (req, res) => {
        try {
            const products = req.body;

            for (let product of products) {
                if (!mongoose.Types.ObjectId.isValid(product.categoryId)) {
                    return res.status(400).send({
                        success: false,
                        message: 'invalidcategoryId'
                    });
                }
                product.categoryId = mongoose.Types.ObjectId.createFromHexString(product.categoryId);
            }
            const result = await Product.insertMany(products);

            res.status(200).send({
                success: true,
                message: "Products added successfully",
                data: result
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: "Failed to add products",
                error: error.message
            });
        }
    },

    getProduct: async (req, res) => {
        try {
            const productId = req.params.productId;

            const data = await Product.findById(productId)
            console.log("prasad", data)
            res.status(200).send({
                success: true,
                message: " successfully",
                data: data
            });
        } catch (error) {
            res.status(200).send({
                success: true,
                message: " successfully",
                data: data
            });
        }
    },
    get: async (req, res) => {
        try {

            const data = await Product.find()
            console.log("prasad", data)
            res.status(200).send({
                success: true,
                message: " successfully",
                data: data
            });
        } catch (error) {
            res.status(200).send({
                success: true,
                message: " successfully",
                data: data
            });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.productId;
            const data = await Product.findByIdAndDelete(productId);
            console.log("skbdkd", data)
            res.status(200).send({
                success: true,
                message: "Product successfully deleted",
                data: data
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: "Failed to delete product",
                error: error.message
            });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const productId = req.params.productId
            const data = await Product.findByIdAndUpdate(productId, {
                $set: {
                    ...req.body
                }
            })
            res.status(200).send({
                success: true,
                message: " successfully  updated",
                data: data
            });
        } catch (error) {
            res.status(400).send({
                success: true,
                message: " unsuccessfully updated",
                data: data
            });
        }
    },


    getAll: async (req, res) => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const data = await Product.aggregate([
                {
                    $lookup:
                    {
                        from: "categories",
                        localField: "categoryId",
                        foreignField: "_id",
                        as: "categoriesAll"
                    }
                },
                {
                    $project: {
                        _id: 0,
                        name: 1,
                        price: 1,
                        description: 1,
                        slug: 1,
                        categoryName: { $arrayElemAt: ["$categoriesAll.name", 0] },

                    }
                },
                {
                    $skip:(page - 1) * limit
                    
                },
                {
                    $limit: parseInt(limit)

                },
                {
                    $sort: {
                        createdAt: -1
                    }

                }
            ])
            res.status(200).send({
                success: true,
                message: "successfully",
                data: data
            });

        } catch (error) {
            res.status(400).send({
                success: true,
                message: "unsuccessfully",
                error: error.message
            });
        }


    }
    


};


