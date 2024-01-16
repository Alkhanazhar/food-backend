const {Schema,model}=require("mongoose")
const foodSchema=new Schema({
    name:String,
    price:String,
    desc:String,
    img:String
})
const Food=model("Food",foodSchema)
module.exports=Food