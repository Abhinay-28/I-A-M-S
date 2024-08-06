const State = require("../models/state-model")

const stateName = async (req,res)=>{
    try {
        const {country,state} = req.body

        const StateCreate  =await State.create({country,state})

        res
          .status(201)
          .json({messaage:StateCreate})
        
    } catch (error) {
        res.status(400).send({msg:"not found"})
    }
}

module.exports = stateName