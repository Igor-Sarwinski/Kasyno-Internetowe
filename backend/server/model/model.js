const mongoose=require('mongoose');

let schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        length:9,
    },
    password:{
        type:String,
        required:true,
        hidden:true,
        length:9,
    },
})

const Userdb=mongoose.model('userdb',schema);

module.exports=Userdb;
