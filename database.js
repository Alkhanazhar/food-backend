const mongoose=require("mongoose")
require('dotenv').config()

class Database{
    static async connect(){
        try{
            (await mongoose.connect(process.env.MONGO_URL))
        }
        catch(e){
            console.log(e)
            await mongoose.disconnect()}}
}
module.exports=Database