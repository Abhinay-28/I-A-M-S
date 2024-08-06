const express = require("express")
const router = express.Router()
const getdistrictList = require('../controllers/districtlist-controller')

router.route("/districtlist").get(getdistrictList)

module.exports = getdistrictList