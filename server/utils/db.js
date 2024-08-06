
require("dotenv").config();
const mongoose = require("mongoose");

// main().then(() => {
//     console.log("Connection successful");
// }).catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Inventory');
// }
const URI = process.env.MONGODB_URI

const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("Connection successful");
    } catch(error){
        console.log(error);
    }
}


module.exports =  connectDb