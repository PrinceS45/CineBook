
import {Router} from "express" ; 
import {createMovie , deleteMovie , getMovieById , getMovies, updateMovieById} from "../controllers/movie.controller.js" ; 
import { validateMovieCreateRequest } from "../middlewares/movie.middlewares.js";


const router = Router() ;

router.post("/" ,validateMovieCreateRequest , createMovie) ; 

router.put("/:id" , updateMovieById) ;

router.delete("/:id" , deleteMovie) ; 

router.get("/:id" , getMovieById) ;

router.patch("/:id" , updateMovieById) ;

router.get("/" , getMovies) ; 




export default router ; 