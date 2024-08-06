const Member = require("../models/member-model")



const getMemberList = async (req, res) => {
    try {
        // const {country} = req.body
       
        const members = await Member.find({});
        console.log(members)
       
        // const listCreate = await  
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = getMemberList
