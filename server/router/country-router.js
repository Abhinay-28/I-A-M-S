const express = require("express")
const router = express.Router()
const countryName = require('../controllers/country-controller')

router.route("/country").post(countryName)

module.exports = countryName