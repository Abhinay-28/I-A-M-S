const express = require("express");
const router = express.Router();
const  {updateMember} = require("../controllers/memberedit-controller");

router.route("/member-id/:id").patch( updateMember)

module.exports = updateMember;


//