import React from 'react'
import classes from "./listItem.module.css";
import ListItemButton from '../listItemBtn';
import { useRouter } from 'next/router';

const ListItem = (props) => {

  const onMovieRemoveHandler = () => {
    props.onRemoveMovie(props.movie);
  }


  return (

    <div className={classes.container}>

      <img className={classes.image} src={props.movie.coverImgURL} />

      <div className={classes.data}>
        
        <h1 className={classes.title}>{props.movie.title}</h1>

        <div className={classes.genres}>

          {props.movie.genres.map(genre => <p key={Math.random()}>
            {genre}
          </p>)}

        </div>

      </div>  
        
      <div className={classes.controllers}>
       <ListItemButton onClick={onMovieRemoveHandler} placeholder="Remove" />
       <ListItemButton to={`/details/${props.movie._id}`} placeholder="Details" />
      </div>

    </div>
    
  )
}

export default ListItem