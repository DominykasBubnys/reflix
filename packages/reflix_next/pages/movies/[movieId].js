import React, {useState} from 'react'
import { MongoClient, ObjectId } from 'mongodb'
import ListItemBtn from '../../components/listItemBtn'
import classes from "../../styles/Details.module.css"
import { useAuth } from '../../components/context/AuthContext'
import ReactPlayer from 'react-player'

const MovieDetails = ({data}) => {

  const {removeFromLibrary, addMovieToLibrary, doesMovieExistInLibrary} = useAuth()
  const Auth = useAuth();
  const [isLoading, setIsLoading] = useState(false)

  return <React.Fragment>

    <div style={{paddingTop: "9%"}}>
      <div>
        {data && <ReactPlayer playing={true} controls width="100%" url={data.videoURL} />}
      </div>
    </div>

    { !isLoading && data && <h1 className={classes.title}>{data.title}</h1>}
    { !isLoading && data && <div className={classes.container}>
    <img src={data.coverImgURL} />
    <div className={classes.content}>
      
      <div className={classes.about}>
        <h2>Description</h2>
        <p className={classes.description}>
          {data.storyLine}
        </p>
      </div>

      <ul className={classes.genres}>
        <h3 className={classes.genres_title}>Genres:</h3>
        {data.genres.map(genre => <li key={Math.random()}>{genre}</li>)}
      </ul>

      <div className={classes.controllers}>
        
        {Auth.currentUser && <ListItemBtn  // currUser
          onClick={doesMovieExistInLibrary(data) ? ()=>{} : addMovieToLibrary.bind(null,data)} 
          placeholder={doesMovieExistInLibrary(data) ? "Remove from library" : "Add to library"} 
        />}

      </div>

    </div>  

  </div>}


</React.Fragment>
}

export const getStaticPaths = async() => {
  console.log("getStaticPaths executes in detail page");
  
  const client = await MongoClient.connect(`mongodb://dombub1:dombub1@cluster0-shard-00-00.4afhm.mongodb.net:27017,cluster0-shard-00-01.4afhm.mongodb.net:27017,cluster0-shard-00-02.4afhm.mongodb.net:27017/reflix?ssl=true&replicaSet=atlas-14l6ii-shard-0&authSource=admin&retryWrites=true&w=majority`)

  const db = client.db()

  const reflixCollection = db.collection("movies");

  let allMovies;

  try {
    console.log("try catch executes ")
    allMovies = await reflixCollection.find({}, {_id: 1}).toArray();

    if(!allMovies) throw new Error("Failed to fetch all movies");

    client.close();

  } catch (error) {
      console.log("Error in index.js api: ", error);
  }


  return {
    fallback: false,
    paths: allMovies.map(movie => ({params: {movieId: movie._id.toString()}}))
  }
}

export const getStaticProps = async(context) => {

  const movieId = context.params.movieId;

  const client = await MongoClient.connect(`mongodb://dombub1:dombub1@cluster0-shard-00-00.4afhm.mongodb.net:27017,cluster0-shard-00-01.4afhm.mongodb.net:27017,cluster0-shard-00-02.4afhm.mongodb.net:27017/reflix?ssl=true&replicaSet=atlas-14l6ii-shard-0&authSource=admin&retryWrites=true&w=majority`)

  const db = client.db()

  const reflixCollection = db.collection("movies");

  const selectedMovie = await reflixCollection.findOne({_id: ObjectId(movieId)})

  client.close();

  return {
    props: {
      data: {
        id: selectedMovie._id.toString(),
        title: selectedMovie.title,
        genres: selectedMovie.genres,
        rate: selectedMovie.rate,
        storyLine: selectedMovie.storyLine,
        category: selectedMovie.category,
        coverImgURL: selectedMovie.coverImgURL,
        videoURL: selectedMovie.videoURL
      }
    }
  }

}

export default MovieDetails