const express = require("express");
const router = express.Router();
const  {updateState} = require("../controllers/stateedit-controller");

router.route("/state-id/:id").patch( updateState)

module.exports = updateState;


//