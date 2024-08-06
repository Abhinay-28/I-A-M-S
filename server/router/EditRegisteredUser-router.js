const express = require("express");
const router = express.Router();
const  {updateUser} = require("../controllers/registeredUser-controller");

router.route("/editRegisteredUser-id/:id").patch( updateUser)

module.exports = updateUser;


// const express = require("express")
// const Contactrouter = express.Router()
// const contactForm = require("../controllers/contact-controller")


// Contactrouter.route("/contact").post(contactForm)

// module.exports=Contactrouter