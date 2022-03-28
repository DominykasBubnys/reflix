import React from 'react'
import classes from "./libraryList.module.css"
import ListItem from "./listItem";

const LibraryList = (props) => {

  return (

    <div>
      { props.library.length > 0 ? 
        <div className={classes.container}>
          {props.library.map(movie => <ListItem onRemoveMovie={props.onRemoveMovie} key={Math.random()} movie={movie} />)}
        </div> : 
        <h1>No library movies</h1>
      }
    </div>
  )
}

export default LibraryList