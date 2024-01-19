import express from "express";
import { Register } from "../../controller/user.controller";
const userRoutes = express.Router();

userRoutes.post('/register',Register);

export default userRoutes ;