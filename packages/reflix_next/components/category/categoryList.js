import classes from "./categoryList.module.css";
import ListItem from './listItem';
import React from "react"



const CategoryList = ({movies, category}) => {

  const selectedMovies = movies.length > 0 ? movies.filter(movie => movie.category === category) : [];


  return (
    <React.Fragment>

      {selectedMovies.length > 0 ? 
        <div className={classes.container}>
          {selectedMovies.map(movie => <ListItem key={Math.random()} movie={movie} />)}
        </div> : 

        <h1>No movies found</h1>
      }


    </React.Fragment>


  )
}

export default CategoryList