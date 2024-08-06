require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const router = require("./router/auth-router")
const CountryRouter = require('./router/country-router')
const DistrictRouter  =require('./router/district-router')
const StateRouter  =require('./router/state-router')
const CityRouter = require('./router/city-router')
const Contactrouter=require("./router/contact-router")
const PersonNameRouter = require('./router/personName-router')
const MemberRouter = require('./router/member-router')
const EDitCityrouter = require('./router/editcity-router')
const editcountryRouter = require('./router/editcountry-router')
const stateeditRouter = require('./router/stateedit-router')
const editdistrictRouter = require('./router/editdistrict-router')
const editNameRouter = require('./router/personnameedit-router')
const memberlistRouter = require('./router/memberlist-router')

const PincodeRouter = require('./router/pincode-router')
const nameList = require('./router/personnamelist-router')
const districtlist = require('./router/districtlist-router')
const countryList = require('./router/countrylist-router')
const CityList = require('./router/citylist-router')
const pincodeList = require('./router/pincodelist-router')
const StateList = require('./router/statelist-router')
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
const pincodeNumber = require("./router/pincode-router");
const membereditRouter = require('./router/memberedit-router')
const pincodeeditRouter = require('./router/pincodeedit-router')
const RegisterUserlist = require('./router/RegisterUserlist-router')
const updateUser = require('./router/EditRegisteredUser-router')

const user = require('./router/auth-router')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT ,DELETE,PATCH,HEAD",
    Credentials:true,
}
app.use(cors(corsOptions))
app.use(express.json());       
// this middleware is used to parse json data from request and it should be applied at the begining of your ,iddleware stack to ensure it's available for alll subsequemt route handlers



app.use("/api/auth",router)
app.use("/api/user",router)
app.use("/api/registerUserlist",RegisterUserlist)
app.use("/api/form",Contactrouter)
app.use("/api/country",CountryRouter)
app.use("/api/state",StateRouter)
app.use("/api/district",DistrictRouter)
app.use("/api/country-list",countryList)
app.use("/api/city",CityRouter)
app.use("/api/pincode",pincodeNumber)
app.use("/api/personName",PersonNameRouter)
app.use("/api/member", MemberRouter)
app.use("/api/statelist",StateList)
app.use("/api/citylist",CityList)
app.use("/api/districtlist",districtlist)
app.use("/api/pincodelist",pincodeList)
app.use("/api/namelist",nameList)
app.use("/api/city-id/:id",EDitCityrouter)
app.use("/api/country-id/:id",editcountryRouter)
app.use("/api/state-id/:id", stateeditRouter)
app.use("/api/district-id/:id", editdistrictRouter)
app.use("/api/member-id/:id", membereditRouter)
app.use("/api/pincode-id/:id", pincodeeditRouter) 
app.use("/api/name-id/:id",editNameRouter)   
app.use('/api/memberlist', memberlistRouter) 
app.use("/api/editRegisteredUser-id/:id",updateUser)                



app.use(errorMiddleware)




// app.get("/",(req,res)=>{
//     res.send("working fine")
// })

// app.get("/register", (req,res)=>{
//     res.status(200).send("welcome at registration page")
// }) now bcs we are using route we will not make routes in index.js file we will make them in controller and auth files
const PORT = process.env.PORT || 9998;

connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})


