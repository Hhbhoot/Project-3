import express from "express";
import  dotenv from "dotenv";
dotenv.config();
import session from "express-session"
import passport from "passport";
import { connectDB } from "./connectDB.js";
import path from "path";;

import user from "./Routes/user/indexroutes.js";
import admin from "./Routes/admin/indexRoutes.js";

import morgan from "morgan";
const PORT = process.env.PORT;
const app = express();


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const imagepath = path.join(__dirname,"public","images")

import './Helpers/localPassport.js';

app.use(session({ secret: 'Hitesh123@', resave: true, saveUninitialized: true }));

app.set("view engine","ejs")


app.set('views',imagepath);
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
     console.log(req.session);
     // console.log(req.user)
     next();
})


app.use(express.json());

app.use(express.urlencoded({ extended : true}))
app.use('/public/images',express.static(imagepath))
app.use(morgan("dev"));

app.use('/user',user)


app.listen(PORT , (err)=>{
    if(err){
         console.log(err)
    }
     console.log("Server connected successfully..")
     connectDB();
    })