const categoryRoutes  = require('./category/category.routes')
const productRoutes = require('./product/product.routes')







module.exports = function(app){
    app.use('/category',categoryRoutes)
    app.use('/product',productRoutes)
}