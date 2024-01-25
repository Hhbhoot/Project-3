import express from "express";
import { isAuthenticated } from "../../Helpers/localPassport.js";
import { addAsk } from "../../controller/user/askController.js";

const askRoutes = express.Router();

askRoutes.post('/addask',isAuthenticated,addAsk);

export default askRoutes;