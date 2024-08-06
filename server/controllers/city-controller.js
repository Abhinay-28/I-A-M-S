const City = require("../models/city-model")

const cityName = async (req,res)=>{
    try {
        console.log(req.body)
        const {country,state,district,city} = req.body

        const CityCreate = await City.create({country,state,district,city})
        res
        .status(201)
        .json({message:CityCreate})
        
    } catch (error) {
        res.status(400).send({msg:"not found"})
        
    }
}

module.exports = cityName