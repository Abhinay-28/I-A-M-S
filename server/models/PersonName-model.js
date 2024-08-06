const { type } = require("express/lib/response")
const mongoose  =require("mongoose")

const personNameSchema = new mongoose.Schema({

    names:{
        type:String,
        required:true

    },

    password:{
        type:String,
        required:true

    },

    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true

    },
    district:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
  
})

const personName = new mongoose.model("PersonName", personNameSchema)
module.exports = personName