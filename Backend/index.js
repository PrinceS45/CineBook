import express from "express" ; 
import dotenv from "dotenv" ; 
import mongoose from "mongoose" ; 
dotenv.config() ; 
const app = express() ; 


app.use(express.json()) ; 

app.get("/health" , (req , res) => {
    return res.status(200).json({
        message : "Server is healthy !" 
    })
})


app.listen(process.env.PORT , () => {
    console.log("Server is running on port 5000")  ; 
    try {
        mongoose.connect(process.env.MONGO_URL || 5000) ; 
        console.log("MongoDB connected successfully") ; 
    }catch(err) {
        console.log("Mongodb connected failed : " , err) ;  
    }
})