const mongoose = require('mongoose')
const Schema =mongoose.Schema
//音性コンテンツのデータベース部分のデータ型の指定
const ProductSchema =new Schema({
        coverimage: String,
        coverimage1: String,
        coverimage2: String,
        coverimage3: String,
        name:String,
        price: Number,
        description:String,
        heding1:String,
        heding2:String,
        heding3:String,
        hedingtext1:String,
        hedingtext2:String,
        hedingtext3:String,
        sound:String,
        sound2:String,
        sound3:String,
        soundtext:String,
        soundtext2:String,
        soundtext3:String,
        
})

module.exports=mongoose.model('Product',ProductSchema)



