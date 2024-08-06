const District = require("../models/district-model")


const getDistrictList = async(req,res) =>{
    try {

        const districts = await District.find({});
        console.log(districts)

        res.status(200).json(districts)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}

module.exports= getDistrictList