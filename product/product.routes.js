const express = require('express')
const router = express.Router()
const productController = require('./product.controller')



router.post('/add',(req,res)=>{
    productController.addProduct(req,res);
})
router.post('/bulkaddProduct',(req,res)=>{
    productController.bulkaddProduct(req,res);
})
router.get('/getProduct/:productId',(req,res)=>{
    productController.getProduct(req,res);
})


router.delete('/delete/:productId',(req,res)=>{
 productController.deleteProduct(req,res)
});

router.put('/update/:productId',(req,res)=>{
    productController.updateProduct(req,res);
})

router.get('/getAll',(req,res)=>{
    productController.getAll(req,res)
})


router.get('/get',(req,res)=>{
    productController.get(req,res)
})

module.exports = router