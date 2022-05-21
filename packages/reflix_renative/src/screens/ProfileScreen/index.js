
import React, { useContext, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Styles from './Styles/index';
import Button from "../../components/formElements/Button/index";
import {useAuth} from "../../components/context/UserContext";

export const ProfileScreen = () => {

  const Auth = useAuth();

  const [showLibrary, setShowLibrary] = useState(false);

  console.log("Profile is working, auth libra: ", Auth.library)

  const logoutHandler = () => {
    Auth.logout()
    if(Auth.navigation)
        Auth.navigation.navigate("Home")
  }


  const LibraryData = () => {

    if(Auth.library){
      if(Auth.library.length > 0){ 
        return (
          <View>
            {Auth.library.map(item => <Text key={Math.random()} style={Styles.dataText}>{item.title}</Text>)}
          </View>
        )
      }
      else return(
        <View>
          <Text style={Styles.dataText}>No movies</Text>
        </View>
      )
    }
   
    
  }

  return <ScrollView >
    {Auth.currentUser ?
      <View style={Styles.container}>        
        <Text style={Styles.header}>Email</Text>
        <Text style={Styles.dataText}>{Auth.currentUser.email} </Text>

        { Auth.library && Auth.currentUser && 
          <Pressable onPress={() => setShowLibrary(!showLibrary)} style={Styles.library}>
            <Text style={Styles.libraryHeader}>Library ({Auth.library.length})</Text>
            {showLibrary && Auth && LibraryData()}
          </Pressable>
        }
        <Button onPress={logoutHandler} title="Logout"/>
      </View>

      :

      <View>

        <Text style={{color: "red", textAlign: "center", fontSize: 30}}>
          Please log in
        </Text>

      </View>
    }
  </ScrollView>
};

export default ProfileScreen;