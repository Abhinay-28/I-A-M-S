const City = require("../models/city-model")


const getCityList = async(req,res) =>{
    try {

        const cities = await City.find({});
        console.log(cities)

        res.status(200).json(cities)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}

module.exports= getCityList