const express = require("express")
const router = express.Router()

const stateName = require('../controllers/state-controller')


router.route("/state").post(stateName)

module.exports= stateName