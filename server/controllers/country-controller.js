const Country = require("../models/country-model")


const countryName =async (req,res)=>{
    try {
        console.log(req.body)
        const {country} = req.body

        const CountryCreate = await Country.create({country})

        res
          .status(201)
          .json({ message: CountryCreate });
        
    } catch (error) {
        res.status(400).send({msg:"not found"})
    }
}

module.exports = countryName