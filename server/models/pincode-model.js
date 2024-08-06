const mongoose  =require("mongoose")

const pincodeSchema = new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    state:{
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

const Pincode = new mongoose.model("Pincode", pincodeSchema)
module.exports = Pincode