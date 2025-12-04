
import {Router} from "express" ; 
import {createMovie as movieController} from "../controllers/movie.controller.js" ; 


const router = Router() ;

router.post("/" , movieController) ; 


export default router ; 