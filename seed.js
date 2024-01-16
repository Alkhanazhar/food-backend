const e = require("express")
const mongoose=require("mongoose")
const Food = require("./models/Food")
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected CLOUD")
}).catch(()=>{
    console.log("Error!!!")
})


const DUMMY_FOODS = [
    {
        name: 'Burger',
        desc: 'Extra Cheese and Spice',
        price: 10,
        img:"https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full"
    },
    {
        name: 'Panner Tikka',
        desc: 'Extra Cheese and Spice',
        price: 12,
        img:"https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg"
    },
    {
        name: 'Pizza',
        desc: 'Extra Cheese and Spice',
        price: 8,
        img:"https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg"
    },
    {
        name: 'Noodles',
        desc: 'Extra Cheese and Spice',
        price: 9,
        img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles.jpg.webp"
    },
    {
        name: 'Burger',
        desc: 'Extra Cheese and Spice',
        price: 7,
        img:"https://cookingfromheart.com/wp-content/uploads/2016/11/Vegetable-Zinger-Burger-3.jpg"
    }
];

const seedFood=async()=>{
await Food.deleteMany({})
await Food.insertMany(DUMMY_FOODS)
console.log("db connected")
await mongoose.disconnect()
}
seedFood()