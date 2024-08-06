const express = require("express")
const router = express.Router()
const getRegisterList = require('../controllers/RegisterUser-list-controller')

router.route("/registeruserlist").get(getRegisterList)

module.exports = getRegisterList