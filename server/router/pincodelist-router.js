const express = require("express")
const router = express.Router()
const getpincodeList = require('../controllers/pincodelist-controller')

router.route("/pincodelist").get(getpincodeList)

module.exports = getpincodeList