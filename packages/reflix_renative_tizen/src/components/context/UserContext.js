import React, { useContext, useState, useEffect } from "react"
import { auth, database } from "../../firebase";

const AuthContext = React.createContext()


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true);
  const [library, setLibrary] = useState(null);
  const [navigation, setNavigation] = useState(null);

  const signup = async(username, email, password) => {

    console.log("Sign up")

    try {
      const signUpReq = await auth.createUserWithEmailAndPassword(email, password);
      const user = signUpReq.user;
  
      const userRef = database.ref('users/' + user.uid + "/user");
      const newUserRef = userRef.push();
  
      await newUserRef.set({
        username,
        email,
      })
  
      return {status: true, response: user};
  
    } catch (error) {
      return {status: false, response: error};
    }

  }

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();



  const getMoviesFromLibrary = async() => {

    const libraryRef = database.ref('users/' + auth.currentUser.uid + "/library");

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

    const libraryRef = database.ref('users/' + auth.currentUser.uid + "/library");
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
    setUserNavigation: (nav) => setNavigation(nav),
    navigation,
    removeFromLibrary : null
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}