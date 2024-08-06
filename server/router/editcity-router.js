const express = require("express");
const router = express.Router();
const  {updateCity} = require("../controllers/editcity-controller");

router.route("/city-id/:id").patch( updateCity)

module.exports = updateCity;


// const express = require("express")
// const Contactrouter = express.Router()
// const contactForm = require("../controllers/contact-controller")


// Contactrouter.route("/contact").post(contactForm)

// module.exports=Contactrouter