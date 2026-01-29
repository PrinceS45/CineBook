import Movie from "../models/movie.model.js";

const createMovie = async (data) => {
    try {
        const movie = await Movie.create(data);
        return { data: movie };
    } catch (error) {
        if (error.name === "ValidationError") {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            });

            return { err, code: 422 };
        }
        throw error;
    }
};

const deleteMovie = async (id) => {
    try {
        const movie = await Movie.findByIdAndDelete(id);

        if (!movie) {
            return { err: "Movie not found", code: 404 };
        }
        return { data: movie };
    } catch (error) {
        if (error.name === "CastError") {
            return { err: "Invalid movie ID", code: 400 };
        }
        throw error;
    }
};

const getMovieById = async (id) => {
    try {
        const movie = await Movie.findById(id);

        if (!movie) {
            return { err: "Movie not found", code: 404 };
        }

        return { data: movie };
    } catch (error) {
        if (error.name === "CastError") {
            return { err: "Invalid movie ID", code: 400 };
        }
        throw error;
    }
};

const updateMovieById = async(id , data) => {
        try {
            const response = Movie.findByIdAndUpdate(id , data , {new : true , runValidators : true}) ; 
            if(!response) {
                return {err : "Movie not found" , code : 404} ;
            }
            return {data : response} ; 
        } catch (error) {
            if (error.name === "ValidationError") {
                let err = {};
                Object.keys(error.errors).forEach((key) => {
                    err[key] = error.errors[key].message;
                });

                return { err, code: 422 };
            }
            throw error;
        }
}



export { createMovie, deleteMovie, getMovieById, updateMovieById };