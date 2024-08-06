const State = require("../models/state-model")


const getStateList = async(req,res) =>{
    try {

        const states = await State.find({});
        console.log(states)

        res.status(200).json(states)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}

module.exports= getStateList