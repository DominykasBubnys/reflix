import React, { useEffect, useState } from 'react'
import classes from "./introList.module.css"
import ListItem from './listItem'
import LoadingSpinner from "../loadingSpinner";

const IntroList = (props) => {

  const selectedMovies = props.data? props.data.filter(movie => movie.category === props.category): [];


  return (

    <React.Fragment>
        { selectedMovies &&
            <div className={`${classes.container} ${classes.kazkas}`}>
                {props.extraTitle ? 
                    <h2 className={classes.extra_title} >{props.extraTitle.toUpperCase()}</h2> : 
                    <h1 className={classes.category_name} >{props.category.toUpperCase()}</h1>}

                <div className={classes.wrapper}>

                    <div className={classes.list}>
                        {selectedMovies.length > 0 ? 
                            selectedMovies.map(movie => <ListItem key={Math.random()} movie = {movie} />)
                            : <h1>No such movies</h1>
                        }  
                    </div>

                    <i className={classes.arrow}></i>

                </div>
                
            </div> 
        }
    </React.Fragment>
    
  )
  
}

export default IntroList