const express=require("express")
const app=express()
const cors=require("cors")
require('dotenv').config()
const foodRoutes=require("./controllers/foodRoute")
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended:true,limit:"10mb",parameterLimit:5000}))
app.use(cors({origin:["http://localhost:3000"]}))
app.use(foodRoutes)
module.exports=app

