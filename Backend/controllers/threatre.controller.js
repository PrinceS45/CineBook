import { createThreatre as createThreatreService } from "../services/threatre.service.js";
import {successResponseBody , errorResponseBody} from "../utils/responsebody.js"


const create = async(req , res) => {
    try {
        const response = await createThreatreService(req.body) ; 
        if(response.err) {
            errorResponseBody.err = response.err , 
            errorResponseBody.message = "Validation Failed on few parameter of the request body" ;
            return res.status(response.code).json(errorResponseBody) ; 
        }
        successResponseBody.data = response ; 
        successResponseBody.message = "Successfully created threatre" ; 
        return res.status(201).json(successResponseBody) ; 
    } catch (error) {
        errorResponseBody.err = error; 
        return res.status(500).json(errorResponseBody) ; 
    }
}


export {create} ; 