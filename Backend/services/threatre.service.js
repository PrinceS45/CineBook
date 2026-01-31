import Threatre from "../models/threatre.model.js";

const createThreatre = async(data) => {
   try {
     const response = await Threatre.create(data) ; 
    return response ;
   } catch (error) {
     console.log(error) ; 
     throw error ; 
   }
}


export {createThreatre} ; 