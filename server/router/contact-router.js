const express = require("express")
const Contactrouter = express.Router()
const contactForm = require("../controllers/contact-controller")


Contactrouter.route("/contact").post(contactForm)

module.exports=Contactrouter