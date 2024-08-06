const express = require("express")
const router = express.Router()
const districtName = require('../controllers/district-controller')

router.route("/district").post(districtName)

module.exports = districtName
