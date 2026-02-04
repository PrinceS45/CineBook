import * as threatreService from "../services/threatre.service.js";
import {successResponseBody , errorResponseBody} from "../utils/responsebody.js"


const create = async(req , res) => {
    try {
        const response = await threatreService.createThreatre(req.body) ; 
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

const deleteThreatre = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await threatreService.deleteThreatre(id);

        if (response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Delete failed";
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data = response.data;
        successResponseBody.message = "Threatre deleted successfully!";
        return res.status(200).json(successResponseBody);
    } catch (err) {
        errorResponseBody.err = err;
        errorResponseBody.message = "Unable to delete threatre!";
        return res.status(500).json(errorResponseBody);
    }
};

const getThreatre = async(req , res) => {
    try {
        const response = await threatreService.getThreatre(req.params.id)  ;
        if(response.err) {
            errorResponseBody.err = response.err  ; 
            return res.status(response.code).json(errorResponseBody) ; 
        }
        successResponseBody.data = response ; 
        successResponseBody.message = "Successfully fetched the data of the threatre " ; 

        return res.status(200).json(successResponseBody) ;
    } catch (error) {
        errorResponseBody.err = error ; 
        return res.status(500).json(errorResponseBody) ; 
    }
}
/***
 * @desc get all threatre
 */
const getAllThreatre = async(req , res) => {
    try {
        const response = await threatreService.getAllThreatre()  ;
        if(response.err) {
            errorResponseBody.err = response.err  ; 
            return res.status(response.code).json(errorResponseBody) ; 
        }
        successResponseBody.data = response ; 
        successResponseBody.message = "Successfully fetched the data of all threatre " ; 

        return res.status(200).json(successResponseBody) ;
    } catch (error) {
        errorResponseBody.err = error ; 
        return res.status(500).json(errorResponseBody) ; 
    }
}


export {create  , deleteThreatre , getThreatre , getAllThreatre} ; 