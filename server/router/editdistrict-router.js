const express = require("express");
const router = express.Router();
const  {updateDistrict} = require("../controllers/editdistrict-controller");

router.route("/district-id/:id").patch( updateDistrict)

module.exports = updateDistrict;


//