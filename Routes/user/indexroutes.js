import express from "express";
const user = express.Router();

import userRoutes from "./userroutes.js";
import askRoutes from "./askRoutes.js";
import bussinessRoutes from "../user/bussinessRoutes.js";

user.use('/',userRoutes);
user.use('/ask',askRoutes);
user.use('/bussiness',bussinessRoutes);

export default user ;