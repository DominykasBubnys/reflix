import React, { useEffect, useState } from 'react'
import fetchMovies from '../components/utils/fetchMovies'
import LoadingSpinner from "../components/loadingSpinner";
import classes from "./Category.module.css";
import CategoryList from '../components/categoryList/categoryList.js'


const Category = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async() => {
        try {
            setData(null);
            setIsLoading(true);
            const MoviesData = await fetchMovies("http://localhost:5000/movies");
            setData(MoviesData.movies.filter(movie => movie.category === props.category));

            setIsLoading(false);
        } catch (error){
            setIsError(error.message || "Unexpected error occured");
            console.log("errorr: ", error)
        }
    }

    loadData();
  }, [props.category])


  return (
    <React.Fragment>


      {isLoading && <LoadingSpinner asOverlay />}

      {data && !isLoading && <div className={classes.container}>
        <h1 className={classes.title}>{props.category.toUpperCase()}</h1>
        <CategoryList movies={data} />
      </div>}
    </React.Fragment>
  )
}

export default Category