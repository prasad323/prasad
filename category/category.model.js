const mongoose = require('mongoose')

const Category = new mongoose.Schema({
 
    name :{
        type:String
    },
    description:{
        type:String
    }
 
})
exports.Category = mongoose.model('categories',Category)