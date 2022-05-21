import classes from "./categoryList.module.css";
import ListItem from './listItem';
import React from "react"



const CategoryList = ({movies, category}) => {

  return (
    <React.Fragment>

      {movies && movies.length > 0 ? 
        <div className={classes.container}>
          {movies.map(movie => <ListItem key={Math.random()} movie={movie} />)}
        </div> : 

        <h1>No movies found</h1>
      }


    </React.Fragment>


  )
}

export default CategoryList