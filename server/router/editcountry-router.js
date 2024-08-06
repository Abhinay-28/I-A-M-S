const express = require("express");
const router = express.Router();
const  {updateCountry} = require("../controllers/editcountry-controller");

router.route("/country-id/:id").patch( updateCountry)

module.exports = updateCountry;


//