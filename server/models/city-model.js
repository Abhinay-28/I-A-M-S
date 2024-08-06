const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
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
    city:{
        type:String,
        required:true
    }
})

const City = new mongoose.model("City" , citySchema)
module.exports = City