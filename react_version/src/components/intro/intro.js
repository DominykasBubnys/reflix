import React from 'react'
import classes from "./intro.module.css"

const Intro = () => {
  return (
    <div className={classes.intro}>
        <h1>Get your tickets now!</h1>
        <img src={require("../../assets/popcorn-logo.png")} />
    </div>
  )
}

export default Intro