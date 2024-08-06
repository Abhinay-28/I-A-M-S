const mongoose = require("mongoose")

const countryListSchema = new mongoose.Schema({
    country:{
        type:String,
        required:true,
    }
})

const CountryList = new mongoose.model("CountryList", countryListSchema)

module.exports = CountryList