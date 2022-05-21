import React, { useEffect, useState, useContext } from 'react'
import fetchMovies from "../components/utils/fetchMovies";
import LoadingSpinner from "../components/loadingSpinner";
import { useParams } from 'react-router-dom';
import classes from "./Details.module.css";
import ListItemBtn from "../components/listItemBtn";
import IntroList from "../components/introList/introList";
import { useAuth } from '../components/context/AuthorContext';
import Modal from "../components/UIElements/Modal";
import ReactPlayer from 'react-player'


const Details = () => {

  const movieId = useParams().movie_id;
  const { addMovieToLibrary, doesMovieExistInLibrary } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const {currentUser} = useAuth();

  const RemoveMovieFromLibrary = () => {
    console.log("Removing item from library method...")
  }

  const openShowTrailer = () => setShowTrailer(true);

  const closeShowTrailer = () => setShowTrailer(false);

  const addToLibraryHandler = async() => {

    if(!data) return null;

    try {
      const resp = await addMovieToLibrary(data);

      console.log("is added to library? ", resp);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    
    const getMovieData = async() => {

      try {
        setIsLoading(true);

        const movieRequest = await fetchMovies(`http://localhost:5000/movie/${movieId}`);
      
        if(!movieRequest.movie) throw new Error("Cannot get movie with provided id");
        setData(movieRequest.movie);
        setIsLoading(false);

        
      } catch (error) {
        console.log("error: ", error)
      }
    }

    getMovieData();

  }, [])


  
  return (

    <React.Fragment>
      <Modal 
        show={showTrailer} 
        onCancel={closeShowTrailer} 
        header="View movie trailer"

        footer={<button onClick={closeShowTrailer}>Close</button>} 
      >
        <div>
          {data && <ReactPlayer playing={true} controls width="100%" url={data.videoURL} />}
        </div>
      </Modal>
      {isLoading && <LoadingSpinner asOverlay />}
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
            
            {currentUser && <ListItemBtn 
              onClick={doesMovieExistInLibrary(data) ? RemoveMovieFromLibrary : addToLibraryHandler} 
              placeholder={doesMovieExistInLibrary(data) ? "Remove from library" : "Add to library"} 
            />}

            <ListItemBtn onClick={openShowTrailer} placeholder="Watch trailer" />
          </div>

        </div>  

      </div>}

      {!isLoading && data && <IntroList extraTitle="similar movies" category={data.category} />}
    
    </React.Fragment>
    
  )
}

export default Details