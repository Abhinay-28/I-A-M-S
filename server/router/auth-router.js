const express = require("express")
const router = express.Router()
const {home,register,login,user} = require('../controllers/auth-controller')
const signupSchema = require("../validators/auth-validator")
const loginSchema = require("../validators/Login-validator")
const validate = require("../middlewares/validate")
const authMiddleware = require('../middlewares/auth-middleware')


router.get("/" , (req,res)=>{
    res.status(200).send("working fine router")
})

router.route("/").get(home)
// alternative way 


router.route("/register").post(validate(signupSchema), register)

router.route("/login").post(validate(loginSchema),login)
router.route('/user').get(authMiddleware,
    user)
// router.route("/registerUser").get( register)
// 
module.exports = router;