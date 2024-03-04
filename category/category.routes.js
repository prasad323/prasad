const express = require('express')
const router = express.Router()
const categoryController = require('./category.controller')

// router.post('/add',(req,res)=>{
//     categoryController.Category(req,res);
// })

router.post('/add',(req,res)=>{
    categoryController.addCategory(req,res);
})
router.get('/all',(req,res)=>{
    categoryController.getCategory(req,res);
})

module.exports = router