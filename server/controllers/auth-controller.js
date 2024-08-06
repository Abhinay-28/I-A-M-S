const User = require("../models/user-model")
const bcrypt = require("bcrypt")


const home = async (req,res)=>{
    try {
        res 
          .status(200)
          .send("working fine router")
    } catch (error) {
        console.log(error)
        
    }
}

const register = async (req,res)=>{
    try {
        console.log(req.body)
        const {username,email,phone,password,isAdmin} = req.body
        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(400).json("email already exist")
        }

        


       const userCreated =   await User.create({username,email,phone,password,isAdmin})

      
       
        res
          .status(201)
          .json({message : userCreated,  userId:userCreated._id.toString()})
        // token:await userCreated.generateToken(), 
    } catch (error) {
        res.status(400).send({msg:"page not found"})
    }

}

// user login

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json("Invalid credentials");
        }

        // Check if the password is correct
        const isValid = await bcrypt.compare(password, userExist.password);

        if (isValid) {
            let token = null;

            // Only generate a token for the specific email
            if (userExist.email === "zephyr@gmail.com") {
                token = await userExist.generateToken();
            }

            res.status(200).json({
                msg: "Login successful",
                token: token, // Token will be null if not zephyr@gmail.com
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json("Invalid email or password");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error");
    }
};

// user logic to get user data from backen to frontend 


const user =async(req,res)=>{
    try {
        const userData = req.user
        console.log(userData)
        return res.status(200).json({msg:userData})

        // res.status(200).json({msg:'hi user'})
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }

}



module.exports = {home , register,login,user}