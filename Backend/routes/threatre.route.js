import express from "express"  ; 
import * as threatreController from "../controllers/threatre.controller.js";
import { validateThreatreCreateRequest } from "../middlewares/threatre.middleware.js";
const router = express.Router() ; 



 router.post("/" , validateThreatreCreateRequest , threatreController.create) ;
 router.delete("/:id"  , threatreController.deleteThreatre) ;

 router.get("/id" , threatreController.getThreatre) ; 
 

export default router ; 