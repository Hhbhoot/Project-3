import express from "express";
const user = express.Router();

import userRoutes from "./userroutes.js";

user.use('/',userRoutes);

export default user ;