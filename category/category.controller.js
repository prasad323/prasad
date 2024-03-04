const {Category} = require('./category.model')

module.exports = {

    addCategory:async(req,res)=>{
        try {
            const add = new Category(req.body)
            const data = await add.save()
        
            res.status(200).send({
                sucess:"true",
                message:"Data added sucessfully",
                data:data 
            })
            
        } catch (error) {
            res.status(400).send({
                sucess:"false",
                message:"Data added Unsucessfully",
                error:error.message
            })
        }
   

},
getCategory:async(req,res)=>{
    try {
        const data = await Category.find()
        res.status(200).send({
            sucess:"true",
            message:" sucessfully",
            data:data 
        })
    } catch (error) {
        res.status(400).send({
            sucess:"false",
            message:" Unsucessfully",
            error:error.message
        })
    }
   }

}