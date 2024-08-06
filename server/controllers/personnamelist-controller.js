const personName = require("../models/PersonName-model")



const getNameList = async (req, res) => {
    try {
        // const {country} = req.body
       
        const names = await personName.find({});
        console.log(names)
       
        // const listCreate = await  
        res.status(200).json(names);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = getNameList
