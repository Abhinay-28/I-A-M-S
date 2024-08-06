const express = require("express")
const router = express.Router()
const member = require('../controllers/member-controller')


router.route("/member").post(member)

module.exports = member