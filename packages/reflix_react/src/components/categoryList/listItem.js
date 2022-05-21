import React from 'react'
import classes from "./listItem.module.css"
import ListItemButton from '../listItemBtn'
import { useNavigate } from 'react-router-dom'

const ListItem = (props) => {

  const navigate = useNavigate();

  const detailsBtnHandler = () => {
    navigate(`details/${props._id}`, { replace: true })
  }

  return (
    <div className={classes.container}>

      <img className={classes.image} src={props.movie.coverImgURL} />

      <div className={classes.data}>
        
        <h1 className={classes.title}>{props.movie.title}</h1>

        <div className={classes.genres}>

          {props.movie.genres.map(genre => <p key = {Math.random()}>
            {genre}
          </p>)}

        </div>

        <ListItemButton to={`/details/${props.movie._id}`} placeholder="Details"/>

      </div>  
      
    </div>
  )
}

export default ListItem