import express from "express";
const bussinessRoutes = express.Router();
import verifyAdmin from "../../Helpers/adminverify.js"
import { isAuthenticated } from "../../Helpers/localPassport.js";
import upload from "../../Helpers/imageUpload.js";

import { addBussiness, removeBussiness } from "../../controller/admin/bussinessController.js";

bussinessRoutes.post('/addbussiness',isAuthenticated,verifyAdmin,upload.single('photos') ,addBussiness)
bussinessRoutes.put('/removebussiness',isAuthenticated,verifyAdmin,removeBussiness);

export default bussinessRoutes ;