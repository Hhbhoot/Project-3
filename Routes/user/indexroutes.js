import express from "express";
const user = express.Router();

import userRoutes from "./userroutes.js";
import askRoutes from "./askRoutes.js";

user.use('/',userRoutes);
user.use('/ask',askRoutes);

export default user ;