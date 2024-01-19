import express from "express";
import  dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
import userRoutes from './Routes/user/user.routes';

app.use('/',userRoutes)

app.listen(PORT , ()=> console.log("Server connected successfully.."))