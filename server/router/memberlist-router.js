const express = require("express")
const router = express.Router()
const getMemberList = require('../controllers/memberlist-controller')

router.route("/memberlist").get(getMemberList)

module.exports = getMemberList