import express from "express";
const bussinessRoutes = express.Router();
import verifyAdmin from "../../Helpers/adminverify.js"
import { isAuthenticated } from "../../Helpers/localPassport.js";

import { addBussiness } from "../../controller/admin/bussinessController.js";

bussinessRoutes.post('/addbussiness',isAuthenticated,verifyAdmin , addBussiness)

export default bussinessRoutes ;