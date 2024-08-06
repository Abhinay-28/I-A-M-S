const User = require("../models/user-model")



const getRegisterList = async (req, res) => {
    try {
        // const {country} = req.body
       
        const registers = await User.find({});
        console.log(registers)
       
        // const listCreate = await  
        res.status(200).json(registers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = getRegisterList
