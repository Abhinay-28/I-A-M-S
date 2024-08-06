const express = require("express")
const router = express.Router()
const  PersonName  =require('../controllers/personName-controller')

router.route("/personName").post(PersonName)

module.exports = PersonName