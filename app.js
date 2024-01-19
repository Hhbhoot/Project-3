import express from "express";
import  dotenv from "dotenv";
import { connectDB } from "./connectDB.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}))

import user from "./Routes/user/indexroutes.js";

app.use('/user',user)


app.listen(PORT , (err)=>{
    if(err){
         console.log(err)
    }
     console.log("Server connected successfully..")
     connectDB();
    })