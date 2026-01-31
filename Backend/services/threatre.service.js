import Threatre from "../models/threatre.model.js";

const createThreatre = async(data) => {
   try {
     const response = await Threatre.create(data) ; 
    return response ;
   } catch (error) {
    if(error.name == 'ValidationError') {
        let err ={} ; 
        Object.keys(error.errors).forEach((key) => {
            err[key] = error.errors[key].message ; 
        })
        return {err : err , code : 422} ; 
    }
     console.log(error) ; 
     throw error ; 
   }
}


export {createThreatre} ; 