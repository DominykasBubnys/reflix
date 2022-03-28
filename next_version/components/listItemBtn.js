import React from 'react'
import classes from "./listItemBtn.module.css";
import { useRouter } from 'next/dist/client/router';

const ListItemButton = (props) => {

  const router = useRouter();

  const linkBtnHandler = () => {
    router.push(props.to)
  }

  return (
    <div className={classes.container}>

        { 
          props.to && 

          <button onClick={linkBtnHandler}>
            {props.placeholder}
          </button>
          // <h1 className={classes.link}>
          //   <Link to={`${props.to}`} >REFLIX</Link>
          // </h1>
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