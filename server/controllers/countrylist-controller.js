const Country = require("../models/country-model")



const getCountryList = async (req, res) => {
    try {
        // const {country} = req.body
       
        const countries = await Country.find({});
        console.log(countries)
       
        // const listCreate = await  
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = getCountryList
