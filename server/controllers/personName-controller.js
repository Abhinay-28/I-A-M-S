
const           PersonName = require('../models/PersonName-model')

const personName = async (req,res)=>{
    try {
        console.log(req.body)
        const {names,password,phone,address,country,state,city,district,pincode} = req.body
        console.log("rarararar")
        const PersonNameCreate = await PersonName.create({names,password,phone,address,country,state,city,district,pincode})
        console.log("brabrarararara")

        res
          .status(201)
          .json({message:PersonNameCreate})
        
    } catch (error) {
        res.status(400).send({msg:"not found"})
    }
}

module.exports = personName