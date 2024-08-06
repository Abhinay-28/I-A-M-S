const jwt = require('jsonwebtoken')
const User = require("../models/user-model")

const authMiddleware = async(req,res,next)=>{
const token = req.header('Authorization')
// if(!token) 
    
    const jwtToken = token.replace('Bearer' , "").trim()
    console.log('token from authMiddleware:',jwtToken);
   

    try {

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        

        const userData = await User.findOne({email:isVerified.email})
        console.log('isVerified from authMiddleware:',userData);

        next() 
    } catch (error) {
        return res.status(401).send('Access Denied')

    }

}

module.exports = authMiddleware