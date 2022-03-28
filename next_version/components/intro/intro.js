import Image from 'next/image'
import React from 'react'
import classes from "./intro.module.css"

const Intro = () => {
  return (
    <div className={classes.intro}>
        <h1>Get your tickets now!</h1>

        <div className={classes.img}>
          <img src={"/popcorn-logo.png"} alt="Image" width="100%" height="100%"/>
        </div>
        
    </div>
  )
}

export default Intro