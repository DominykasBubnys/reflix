import React from 'react'
import {useAuth} from "../../components/context/AuthContext";
import LibraryList from "../../components/libraryList/libraryList"
import classes from "../../styles/Library.module.css"


const Library = () => {

  const {library, removeFromLibrary, currentUser } = useAuth();
  const Auth = useAuth();


  return (

    <div className={classes.container}>
      {Auth.currentUser ? 
        <h1 className={classes.title}>LIBRARY</h1> : 
        <h1>Please login</h1>
      }

      {Auth.currentUser && !Auth.library && <h1>No movies selected</h1>}

      
      {Auth.currentUser && Auth.library && <LibraryList onRemoveMovie={removeFromLibrary} key={Math.random()} library={library} />}

    </div>
  )
}


export default Library