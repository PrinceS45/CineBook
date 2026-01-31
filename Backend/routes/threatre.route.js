import express from "express"  ; 
import * as threatreController from "../controllers/threatre.controller.js";
const router = express.Router() ; 



 router.post("/" , threatreController.create) ;




export default router ; 