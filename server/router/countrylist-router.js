const express = require("express")
const router = express.Router()
const getcountryList = require('../controllers/countrylist-controller')

router.route("/countrylist").get(getcountryList)

module.exports = getcountryList