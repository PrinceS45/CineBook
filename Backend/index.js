import express from "express" ; 
import dotenv from "dotenv" ; 
import mongoose from "mongoose" ; 
import movieRoute from "./routes/movie.routes.js" ; 
import threatreRoute from "./routes/threatre.route.js" ; 



dotenv.config() ; 



const app = express() ; 


app.use(express.json()) ; 
app.use(express.urlencoded({extended : true})) ; 

app.get("/health" , (req , res) => {
    return res.status(200).json({
        message : "Server is healthy !" 
    })
})

//invoking movie route
app.use("/mba/api/v1/movies" , movieRoute) ; 
// invoking threatre route 
app.use("/mba/api/v1/threatre" , threatreRoute) ; 

app.listen(process.env.PORT , () => {
    console.log("Server is running on port 5000")  ; 
    try {
        mongoose.connect(process.env.MONGO_URL || 5000) ; 
        console.log("MongoDB connected successfully") ; 
    }catch(err) {
        console.log("Mongodb connected failed : " , err) ;  
    }
})