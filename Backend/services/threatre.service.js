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
const deleteThreatre = async (id) => {
    try {
        const threatre = await Threatre.findByIdAndDelete(id);

        if (!threatre) {
            return { err: "Threatre not found", code: 404 };
        }
        return { data: threatre };
    } catch (error) {
        if (error.name === "CastError") {
            return { err: "Invalid threatre ID", code: 400 };
        }
        throw error;
    }
};

// @params id = id is the unique on 


const getThreatre = async (id) => {
   try {
    const response = await Threatre.findById(id) ; 
if(!response) {
    return {
     err : "No threatre is found for the given id " , 
     code : 404 
    }
}
return response ; 
   } catch (error) {
     console.log(error) ; 
     throw error ; 
   }
}

/***
 * @des get all threatre 
 * @route /threatre
 * @args 
 */
const getAllThreatre = async () => {
   try {
    const response = await Threatre.find({}) ; 
if(!response) {
    return {
     err : "No threatre is found for the given id " , 
     code : 404 
    }
}
return response ; 
   } catch (error) {
     console.log(error) ; 
     throw error ; 
   }
}


export {createThreatre , deleteThreatre , getThreatre , getAllThreatre} ; 