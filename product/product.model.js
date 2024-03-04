const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')


const Product = new mongoose.Schema({
 
    name :{
        type:String,
        unique:true
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        unique:true

    },
    price:{
        type:Number,
        unique:true

    },
    description:{
        type:String,
        unique:true

    },
    slug:{
        type:String,
        unique:true
    }
 
})
exports.Product = mongoose.model('products',Product)