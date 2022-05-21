import React from 'react'
import classes from "./listItemBtn.module.css";
import { Link, useNavigate } from 'react-router-dom';


const ListItemButton = (props) => {

  const navigation = useNavigate();

  const linkBtnHandler = () => {
    navigation(props.to)
  }

  return (
    <div className={classes.container}>

        { 
          props.to && 

          <button onClick={linkBtnHandler}>
            {props.placeholder}
          </button>
        }


        { !props.to && props.onClick &&
          <button onClick={props.onClick}>
            {props.placeholder}
          </button>
        }
    </div>
  )
}

export default ListItemButton