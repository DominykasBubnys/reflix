import React from 'react'
import { Text, View } from 'react-native'
import BrowseScreen from '../../screens/BrowseScreen/index.web'

const Browse = (props) => ( <BrowseScreen data={props.data} /> )


export const getStaticProps = async()=> {

  let allMovies;

  try {
      const moviesRequest = await fetch("https://reflix-database.herokuapp.com/movies");

      allMovies = await moviesRequest.json()

      if(!allMovies) throw new Error("Failed to fetch all movies");


  } catch (error) {
      console.log("Error in index.js api: ", error);
  }


  return{
      props:{
          data: allMovies ? allMovies.movies.map(movie => ({
              id: movie._id.toString(),
              title: movie.title,
              genres: movie.genres,
              rate: movie.rate,
              storyLine: movie.storyLine,
              category: movie.category,
              coverImgURL: movie.coverImgURL,
              videoURL: movie.videoURL

          })) : []
      },

  }

}


export default Browse