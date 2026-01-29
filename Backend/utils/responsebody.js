const errorResponseBody = {
    err : {} , 
    datra : {} , 
    message : "Something went wrong , cannot process the request" , 
    success : false , 
}
const successResponseBody = {
    err : {} , 
    data : {} , 
    message : "Successfully processed the request" , 
    success : true , 
}

export {errorResponseBody , successResponseBody} ;