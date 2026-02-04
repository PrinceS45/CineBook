import mongoose from "mongoose";
// this threater schema define the schema of threatre resource to be stored in db 

const threatreSchema = new mongoose.Schema({
   name : {
    type : String , 
    required : true , 
    minlength : 5 , 
   }  , 
   description : String , 
   city : {
    type : String , 
    required : true , 
   } , 
   pincode : {
    type : Number , 
    required : true , 
   } , 
   address : String , 

} , {timestamps : true }) ; 

const Threatre = mongoose.model("Threatre" , threatreSchema) ;

export default Threatre ; 