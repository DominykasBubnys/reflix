import React from 'react'
import Intro from '../components/intro/intro';
import IntroList from '../components/introList/introList';
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <Intro />
      <IntroList category="most popular" />
      <IntroList category="top rated" />
    </div>
  )
}

export default Home