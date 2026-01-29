import {
    createMovie as createMovieService,
    getMovieById as getMovieByIdService,
    deleteMovie as deleteMovieService,
    updateMovieById as updateMovieByIdService
} from "../services/movie.service.js";

import { successResponseBody, errorResponseBody } from "../utils/responsebody.js";

const createMovie = async (req, res) => {
    try {
        const response = await createMovieService(req.body);

        if (response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Validation failed";
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data = response.data;
        successResponseBody.message = "Movie created successfully!";
        return res.status(201).json(successResponseBody);
    } catch (err) {
        errorResponseBody.err = err;
        errorResponseBody.message = "Unable to create movie!";
        return res.status(500).json(errorResponseBody);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleteMovieService(id);

        if (response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Delete failed";
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data = response.data;
        successResponseBody.message = "Movie deleted successfully!";
        return res.status(200).json(successResponseBody);
    } catch (err) {
        errorResponseBody.err = err;
        errorResponseBody.message = "Unable to delete movie!";
        return res.status(500).json(errorResponseBody);
    }
};

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getMovieByIdService(id);

        if (response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Fetch failed";
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data = response.data;
        successResponseBody.message = "Movie fetched successfully!";
        return res.status(200).json(successResponseBody);
    } catch (err) {
        errorResponseBody.err = err;
        errorResponseBody.message = "Unable to fetch movie!";
        return res.status(500).json(errorResponseBody);
    }
};

const updateMovieById = async (req , res ) => {
    try {
        const movie = await updateMovieByIdService(req.params.id , req.body) ;
        if(movie.err) {
            errorResponseBody.err = movie.err ;
            errorResponseBody.message = "Update failed due to validation error" ; 
            return res.status(movie.code).json(errorResponseBody) ; 
        }
        successResponseBody.data = movie.data;
        successResponseBody.message = "Movie updated successfully!";
        return res.status(200).json(successResponseBody);
    } catch (err) {
        errorResponseBody.err = err;
        errorResponseBody.message = "Unable to update movie!";
        return res.status(500).json(errorResponseBody);
    }
}

export { createMovie, deleteMovie, getMovieById, updateMovieById };