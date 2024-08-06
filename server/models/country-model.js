const mongoose = require("mongoose")

const countrySchema = new mongoose.Schema({
    country:{
        type:String,
        required:true,
    }
})

const Country = new mongoose.model("Country", countrySchema)

module.exports = Country