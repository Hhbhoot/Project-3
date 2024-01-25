import express from "express";
const admin = express.Router();

import bussinessRoutes from "./bussinessRoutes.js";

admin.use('/bussiness',bussinessRoutes);

export default admin ;