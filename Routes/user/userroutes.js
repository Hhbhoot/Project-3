import express from "express";
import {Register} from "../../controller/usercontroller.js"
const userRoutes = express.Router();

userRoutes.post('/register',Register);

export default userRoutes ;