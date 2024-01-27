import express from "express";
import { isAuthenticated } from "../../Helpers/localPassport.js";
import { addAsk, completeAsk, deleteAsk, myAsk, updateAsk } from "../../controller/user/askController.js";

const askRoutes = express.Router();

askRoutes.post('/addask',isAuthenticated,addAsk);
askRoutes.get('/myask',isAuthenticated,myAsk);
askRoutes.put('/updateask',isAuthenticated,updateAsk)
askRoutes.put('/deleteask',isAuthenticated,deleteAsk);
askRoutes.post('/completeask',isAuthenticated,completeAsk);


export default askRoutes;