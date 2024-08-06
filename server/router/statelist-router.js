const express = require("express")
const router = express.Router()
const getStateList = require('../controllers/statelist-controller')

router.route("/statelist").get(getStateList)

module.exports = getStateList