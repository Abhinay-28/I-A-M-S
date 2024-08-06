const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

const State  = new mongoose.model("State", stateSchema)
module.exports = State
