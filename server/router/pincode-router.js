const express = require("express")
const router = express.Router()
const  pincodeNumber  =require('../controllers/pincode-controller')

router.route("/pincode").post(pincodeNumber)

module.exports = pincodeNumber