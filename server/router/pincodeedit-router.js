const express = require("express");
const router = express.Router();
const  {updatePincode} = require("../controllers/pincodeedit-controller");

router.route("/pincode-id/:id").patch( updatePincode)

module.exports = updatePincode;


//