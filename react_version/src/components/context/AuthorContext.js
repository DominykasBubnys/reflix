import React, { useContext, useState, useEffect } from "react"

import app, { auth, database } from "../../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true);
  const [library, setLibrary] = useState(null);

  const signup = async(username, email, password) => {

      try {
        const signUpReq = await auth.createUserWithEmailAndPassword(email, password);
        const user = signUpReq.user;
    
        const userRef = database.ref('users/' + user.uid + "/user");
        const newUserRef = userRef.push();
    
        await newUserRef.set({
          username,
          email,
          library: [1,2,25]
        })
    
        return {status: true, response: user};
    
      } catch (error) {
        return {status: false, response: error};
      }
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const getMoviesFromLibrary = async() => {

    console.log("get movies from library in context executes");
    const libraryRef = database.ref('users/' + auth.uid + "/library");

    libraryRef.on("value", (snapshot) => {
      if(snapshot.exists()){
        setLibrary(Object.values(snapshot.val()))
      }
    })
  }

  const doesMovieExistInLibrary = (movie) => {
    let existingMovie;

    if(library)existingMovie = library.filter(item => item.title === movie.title)[0];
    else existingMovie = false;

    return existingMovie;
  }

  const addMovieToLibrary = async(movie) => {

    const libraryRef = database.ref('users/' + auth.uid + "/library");
    const newMovieRef = libraryRef.push();

    if(!doesMovieExistInLibrary(movie)){
      await newMovieRef.set({
        ...movie
      })
      return true;
    }
    else return false
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        setCurrentUser({email: user.email, uid: user.uid});
        getMoviesFromLibrary();
      }
      else setCurrentUser(null)
      setLoading(false)
    })

    return unsubscribe
  }, [])


  const value = {
    currentUser,
    login,
    signup,
    logout,
    library,
    doesMovieExistInLibrary,
    addMovieToLibrary,
    removeFromLibrary : null
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}