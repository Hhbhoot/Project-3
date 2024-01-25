import express from "express";
const bussinessRoutes = express.Router();
import verifyAdmin from "../../Helpers/adminverify.js"
import { addBussiness } from "../../controller/admin/bussinessController.js";

bussinessRoutes.post('/addbussiness',verifyAdmin , addBussiness)

export default bussinessRoutes ;