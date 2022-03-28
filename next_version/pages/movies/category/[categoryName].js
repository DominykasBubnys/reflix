import React, {useState} from 'react'
import { MongoClient } from 'mongodb'
import Category from '../../../components/category/category'

const MovieDetails = ({data}) => {

  return <React.Fragment>
      
      <Category data={data} category={data ? data[0].category : "no category"} />
  
    </React.Fragment>
}

export const getStaticPaths = async() => {

  return {
    fallback: false,
    paths: [
      {
        params: {categoryName: "most-popular"}
      },
      {
        params: {categoryName: "top-rated"}
      }
    ]
  }
}

export const getStaticProps = async(context) => {

  const categoryName = context.params.categoryName;

  const client = await MongoClient.connect(`mongodb://dombub1:dombub1@cluster0-shard-00-00.4afhm.mongodb.net:27017,cluster0-shard-00-01.4afhm.mongodb.net:27017,cluster0-shard-00-02.4afhm.mongodb.net:27017/reflix?ssl=true&replicaSet=atlas-14l6ii-shard-0&authSource=admin&retryWrites=true&w=majority`)

  const db = client.db()

  const reflixCollection = db.collection("movies");

  let allMovies;

  try {
    allMovies = await reflixCollection.find({category: categoryName.replace("-", " ")}).toArray();

    if(!allMovies) throw new Error("Failed to fetch all movies");

    client.close();

} catch (error) {
    console.log("Error in index.js api: ", error);
}

  return {
    props: {
      data: allMovies ? allMovies.map(movie => ({
        id: movie._id.toString(),
        title: movie.title,
        genres: movie.genres,
        rate: movie.rate,
        storyLine: movie.storyLine,
        category: movie.category,
        coverImgURL: movie.coverImgURL,
        videoURL: movie.videoURL

    })) : []
    }
  }

}

export default MovieDetails