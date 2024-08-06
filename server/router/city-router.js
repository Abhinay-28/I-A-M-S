const express = require("express")
const router = express.Router()
const cityName = require("../controllers/city-controller")

router.route("/city").post(cityName)

module.exports = cityName