const badRequestResponse = {
     success : false , 
       err : "" , 
       data : {} , 
       message : "Malformed Request | Bad Request" ,
}

const validateMovieCreateRequest = async (req , res , next) => {
   // validate the movie name 
   if(!req.body.name ) {
    badRequestResponse.err = "The name of the movie is not present" ; 
    return res.status(400).json(badRequestResponse) ; 
   }
   // validate the movie description 
   if(!req.body.description) {
    badRequestResponse.err = "The description of the movie is not present "  ; 
    return res.status(400).json(badRequestResponse)  ;
   }
   // validate movie caste 
   
   if(!req.body.casts || (!req.body.casts instanceof Array) || req.body.casts.length <= 0) {
    badRequestResponse.err = "The casts of the movie is not present in request"
    return res.status(400).json(badRequestResponse)  ; 
   }

   // validate the trailer url 
   if(!req.body.trailerUrl) {
    badRequestResponse.err = "Trailer Url of the movie is not present in this request"
    return res.status(400).json(badRequestResponse) ; 
   }
   
   // validate the release date of movie 
   if(!req.body.releaseDate) {
    badRequestResponse.err = "The release date is not presenet in request" ; 
    return res.status(400).json(badRequestResponse) ; 
   }

   // validate  director of movie 
   if(!req.body.director) {
    badRequestResponse.err = "The director of the movie is not present in the request" ; 
    return res.status(400).json(badRequestResponse) ; 
   }
   next(); 
}


export {validateMovieCreateRequest} ; 