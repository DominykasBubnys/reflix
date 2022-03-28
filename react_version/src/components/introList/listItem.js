import React from 'react'
import classes from "./listItem.module.css"
import ListItemButton from '../listItemBtn'
import { useNavigate, useParams } from 'react-router-dom'


const ListItem = ({movie}) => {

  const navigate = useNavigate();

  const genresElement = (
    <ul className={classes.genres_list}>
      {movie.genres.map((genre) => <li key={Math.random()} >{genre}</li>)}
    </ul>
  )

  const detailsBtnHandler = () => {
    navigate(`details/${movie._id}`, { replace: true })
  }



  return (
    <div className={classes.container}>
        <img className={classes.image} src={movie.coverImgURL} />

        <div className={classes.content}>

          <h2>{movie.title}</h2>
          <h4>{movie.rate}</h4>
          {genresElement}

          <ListItemButton onClick={detailsBtnHandler} placeholder="Details" />
        </div>
        
    </div>
  )
}

export default ListItem