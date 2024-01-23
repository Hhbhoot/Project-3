import express from "express";
import {Register, login} from "../../controller/usercontroller.js"

const userRoutes = express.Router();
import upload from "../../Helpers/imageUpload.js";
import passport from "passport";

userRoutes.post('/register',upload.single("profileimage"),Register);
userRoutes.post ("/login", passport.authenticate('local'),login)

export default userRoutes ;