const express = require("express");
const router = express.Router();
const  {updateName} = require("../controllers/personNameedit-controller");

router.route("/name-id/:id").patch( updateName)

module.exports = updateName;


//