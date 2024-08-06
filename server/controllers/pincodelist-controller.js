const Pincode = require("../models/pincode-model")


const getPincodeList = async(req,res) =>{
    try {

        const pincodes = await Pincode.find({});
        console.log(pincodes)

        res.status(200).json(pincodes)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}

module.exports= getPincodeList