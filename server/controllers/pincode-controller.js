const Pincode = require('../models/pincode-model')

const pincodeNumber = async(req,res)=>{
    try {
        console.log(req.body)
        const{country,state,district,pincode} = req.body
        const PincodeCreate = await Pincode.create({country,state,district,pincode})

        res
          .status(201)
          .json({message:PincodeCreate})
        
    } catch (error) {
        res.status(400).send({msg:"not found"})
    }
}

module.exports = pincodeNumber