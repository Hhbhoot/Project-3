import express from "express";
import { isAuthenticated } from "../../Helpers/localPassport.js";
import verifyAdmin from "../../Helpers/adminverify.js";
import { getAllLead, getSpecificUserLead } from "../../controller/admin/leadController.js";
const leadRoutes = express.Router();

leadRoutes.get('/getalllead',isAuthenticated,verifyAdmin,getAllLead);
leadRoutes.get('/getspecificuserlead',isAuthenticated,verifyAdmin,getSpecificUserLead);

export default leadRoutes ;