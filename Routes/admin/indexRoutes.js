import express from "express";
const admin = express.Router();

import bussinessRoutes from "./bussinessRoutes.js";
import leadRoutes from "./leadRoutes.js";
import userRoutes from "../user/userroutes.js";

admin.use('/',userRoutes);
admin.use('/bussiness',bussinessRoutes);
admin.use('/lead',leadRoutes);

export default admin ;