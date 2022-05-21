import React, { useEffect, useState, useContext } from 'react'
import classes from "./Library.module.css"
import LibraryList from '../components/libraryList/libraryList'
import { useAuth } from '../components/context/AuthorContext';

const Library = () => {

  const {library, removeFromLibrary, currentUser } = useAuth();

  return (

    <div className={classes.container}>
      {currentUser ? 
        <h1 className={classes.title}>LIBRARY</h1> : 
        <h1>Please login</h1>
      }

      {currentUser && !library && <h1>No movies selected</h1>}

      
      {currentUser && library && <LibraryList onRemoveMovie={removeFromLibrary} key={Math.random()} library={library} />}

    </div>
  )
}

export default Library