import express from "express";
import {Register, login, updateProfile} from "../../controller/usercontroller.js"

const userRoutes = express.Router();
import upload from "../../Helpers/imageUpload.js";
import passport from "passport";
import LocalStrategy from "../../Helpers/localPassport.js";
import { isAuthenticated } from "../../Helpers/localPassport.js"


userRoutes.post('/register',upload.single("profileimage"),Register);
userRoutes.post ("/login", passport.authenticate('local'),login)
userRoutes.put('/updateprofile',isAuthenticated,updateProfile)


export default userRoutes ;