import express from "express";
import {Register, login} from "../../controller/usercontroller.js"
const userRoutes = express.Router();
import upload from "../../Helpers/imageUpload.js";

userRoutes.post('/register',upload.single("profileimage"),Register);
userRoutes.post('/login',login)

export default userRoutes ;