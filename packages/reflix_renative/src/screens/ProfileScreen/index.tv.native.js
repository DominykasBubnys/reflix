import React from 'react'
import { Text, View } from 'react-native'
import Styles from "./Styles/index.tv.native";
import {useAuth} from "../../components/context/UserContext";

const ProfileScreen = () => {

  const Auth = useAuth();

  const library = Auth.library;

  const LibraryData = () => {

    if(library){
      if(library.length && library.length > 0){ 
        return (
          <View style={Styles.library_movies_container}>
            {library.map(item => <Text key={Math.random()} style={Styles.dataText}>{item.title}</Text>)}
          </View>
        )
      }
      else return(
        <View style={Styles.library_movies_container}>
          <Text style={Styles.dataText}>No movies</Text>
        </View>
      )
    }
   
    
  }


  return (
    <View style={Styles.container}>

        

        {Auth.currentUser ?
          
          <>

            <View style={Styles.status_container}>

              <Text style={Styles.status_header}>User status:</Text>

              <Text style={Styles.status_text}>{Auth.currentUser ? "_is logged in" : "_is logged out"}</Text>

            </View>

            <Text style={Styles.user}>{Auth.currentUser.email}</Text>
            
            <View style={Styles.library_container}>

              <Text style={Styles.library_header}>Saved movies</Text>

              <Text style={Styles.library_length}>Count: _{library && library.length ? library.length : 0}</Text>

              { 
                Auth ? LibraryData() : <Text style={{color:"red"}}>Please log in</Text>
              }

            </View>
          </>

          :

          <>

            <Text style={{color:"red"}}>Please log in</Text>

          </>

        }

    </View>
  )
}

export default ProfileScreen