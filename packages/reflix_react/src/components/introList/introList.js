import React, { useEffect, useState } from 'react'
import classes from "./introList.module.css"
import ListItem from './listItem'
import fetchMovies from '../utils/fetchMovies'
import LoadingSpinner from "../loadingSpinner";

const IntroList = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const [isUrl, setIsUrl] = useState(true);

    useEffect(() => {
        const loadData = async() => {
            try {
                setIsLoading(true);
                const MoviesData = await fetchMovies("http://localhost:5000/movies");
                setData(MoviesData.movies.filter(movie => movie.category === props.category));

                setIsLoading(false);
            } catch (error) {
                setIsError(error.message || "Unexpected error occured");
                console.log("errorr: ", error)
            }
        }

        loadData();
    }, [])


  return (

    <React.Fragment>
        {isLoading && <LoadingSpinner asOverlay />}
        { !isLoading && <div className={classes.container}>
            {props.extraTitle ? 
                <h2 className={classes.extra_title} >{props.extraTitle.toUpperCase()}</h2> : 
                <h1 className={classes.category_name} >{props.category.toUpperCase()}</h1>}

            <div className={classes.wrapper}>

                <div className={classes.list}>
                    {data ? 
                        data.map(movie => <ListItem key={Math.random()} movie = {movie} />)
                        : null
                    }  
                </div>

                <i className={classes.arrow}></i>

            </div>
            
        </div>}
    </React.Fragment>
    
  )
}

export default IntroList