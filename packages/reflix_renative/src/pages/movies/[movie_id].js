import React from 'react'
import { Text, View } from 'react-native';
import DetailsScreen from "../../screens/DetailsScreen/index.web";

const Details = (props) => {

    const {selectedMovie} = props;

    return <DetailsScreen movie={selectedMovie} />
}


export const getStaticPaths = async() => {



    let allMovies;

    try {
        const moviesRequest = await fetch("https://reflix-database.herokuapp.com/movies");

        if(!moviesRequest) throw new Error("Failed to fetch all movies");

        const moviesJson = await moviesRequest.json();

        allMovies = moviesJson.movies;

    } catch (error) {
        console.log("Error in index.js api: ", error);
    }


    return {
        fallback: false,
        paths: allMovies.map(movie => ({params: {movie_id: movie._id.toString()}}))
    }
}
  
export const getStaticProps = async(context) => {

    const movieId = context.params.movie_id;

    const movieReq = await fetch(`https://reflix-database.herokuapp.com/movie/${movieId}`);

    const movieReqJson = await movieReq.json();

    const selectedMovie = movieReqJson.movie;


    return {
        props: {
            selectedMovie: selectedMovie ? selectedMovie : {}
        }
    }

}

export default Details