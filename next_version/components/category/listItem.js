import React from 'react'
import classes from "./listItem.module.css"
import ListItemButton from '../listItemBtn'

const ListItem = (props) => {

  return (
    <div className={classes.container}>

      <img className={classes.image} src={props.movie.coverImgURL} />

      <div className={classes.data}>
        
        <h1 className={classes.title}>{props.movie.title}</h1>

        <div className={classes.genres}>

          {
            props.movie.genres.map(genre => <p key = {Math.random()}>
              {genre}
            </p>)
          }

        </div>

        <ListItemButton to={`/movies/${props.movie.id}`} placeholder="Details"/>

      </div>  
      
    </div>
  )
}

export default ListItem