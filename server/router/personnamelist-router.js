const express = require("express")
const router = express.Router()
const getNameList = require('../controllers/personnamelist-controller')

router.route("/namelist").get(getNameList)

module.exports = getNameList