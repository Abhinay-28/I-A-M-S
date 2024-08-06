const mongoose  =require("mongoose")

const districtSchema = new mongoose.Schema({
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
    }
})

const District = new mongoose.model("District" , districtSchema)
module.exports = District