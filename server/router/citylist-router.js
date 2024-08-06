const express = require("express")
const router = express.Router()
const getCityList = require('../controllers/citylist-controller')

router.route("/citylist").get(getCityList)

module.exports = getCityList