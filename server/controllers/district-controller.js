const mongoose = require("mongoose")
const District = require("../models/district-model")

 
const districtName = async (req,res)=>{
    try {
        console.log(req.body)
        const {country,state,district} = req.body

        const DistrictCreate = await District.create({country,state,district})

        res
          .status(201)
          .json({message:DistrictCreate})
        
    } catch (error) {
        res.status(400).send({msg:"not found"})
        
    }
}

module.exports = districtName