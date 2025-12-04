import Movie from "../models/movie.model.js" ; 
/* 
  @param {*} req name , description 
  @param {*} req 
  @return  movie created
*/
const createMovie = async (req , res) => {
     try {
      const movie = await Movie.create(req.body) ; 
      return res.status(201).json({
        success : true , 
        error : {} , 
        data : movie , 
        message : "Movie created successfully !"
      })
     } catch (err) {
        console.log("Error in creating movie") ; 
        return res.status(500).json({
            success : false , 
            error : err , 
            data : {} , 
            message : "Unable to create movie !" , 
        })
     }
}



export {createMovie} ; 