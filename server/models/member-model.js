const mongoose =require("mongoose")

const memberSchema = new mongoose.Schema({
    UserNo:{
        type:Number,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    UserEmail:{
        type:String,
        required:true
    },
    UserPincode:{
        type:Number,
        required:true
    },
    Created_by:{
        type:String,
        required:true
    },
    Edited_by:{
        type:String,
        required:true
    }
})

const Member = new mongoose.model("Member", memberSchema)
module.exports = Member