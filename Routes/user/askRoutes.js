import express from "express";
import { isAuthenticated } from "../../Helpers/localPassport.js";
import { addAsk, deleteAsk, myAsk } from "../../controller/user/askController.js";

const askRoutes = express.Router();

askRoutes.post('/addask',isAuthenticated,addAsk);
askRoutes.get('/myask',isAuthenticated,myAsk);
askRoutes.put('/deleteask',isAuthenticated,deleteAsk);

export default askRoutes;