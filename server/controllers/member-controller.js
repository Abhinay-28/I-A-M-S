const Member = require('../models/member-model')
const mongoose = require('mongoose')

const member = async(req,res)=>{
    try {
        console.log(req.body)
        const {UserNo,UserName,UserEmail,UserPincode,Created_by,Edited_by} = req.body



        let userNo;
        if (UserNo) {
          userNo = new mongoose.Types.ObjectId(UserNo);
        } else {
          userNo = new mongoose.Types.ObjectId(); // Generate a new ObjectId if not provided
        }

        const MemberCreate  = await Member.create({UserNo,UserName,UserEmail,UserPincode,Created_by,Edited_by})

        res
          .status(201)
          .json({message:MemberCreate})

        
    } catch (error) {
        res.status(400).send({msg:"not found"})
        console.log(error)
    }
}

module.exports = member