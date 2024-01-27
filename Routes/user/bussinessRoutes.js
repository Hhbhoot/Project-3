import express from "express"
import { isAuthenticated } from "../../Helpers/localPassport.js";
import { getAllBussiness, getBussinessByCategory } from "../../controller/user/bussinessController.js";
const bussinessRoutes = express.Router();

bussinessRoutes.get('/getallbussinesses',isAuthenticated,getAllBussiness);
bussinessRoutes.get('/getbussinessbycategory',isAuthenticated,getBussinessByCategory);

export default bussinessRoutes;