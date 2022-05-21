import React, { useContext, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View, Alert, Platform } from 'react-native';
import Styles from '../styles/ProfileStyles';
import Button from '../components/formElements/Button';
import {ButtonStyles} from "../styles/FormElementsStyles";
import { useAuth } from '../components/context/UserContext';
import FocusableButton from "../focusable/FocusableButton"

export const ProfileScreen = () => {

  const Auth = useAuth();


  const [showLibrary, setShowLibrary] = useState(false);

  const logoutHandler = () => {
    Auth.logout()
    if(Auth.navigation){
      Auth.navigation.navigate("Home")
    }
    else Alert.alert("Navigation is missing")
  }


  const LibraryData = () => {

    if(Auth.library && Auth.currentUser){
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
      {Auth.currentUser && <View style={Styles.container}>
        <Image style={Platform.isTV? Styles.tvImage : Styles.image} source={require("../../assets/user.png")}/>
      
        <Text style={Styles.header}>Email</Text>
        <Text style={Styles.dataText}>{Auth.currentUser.email} </Text>

        <Pressable onPress={() => setShowLibrary(!showLibrary)} style={Styles.library}>
          <Text style={Styles.libraryHeader}>Library ({Auth.library ? Auth.library.length : 0})</Text>
          {showLibrary && Auth.currentUser && LibraryData()}
        </Pressable>

        <FocusableButton style={ButtonStyles.button} title="Logout" onPress={logoutHandler} />

        
      </View>}
  </ScrollView>
};

export default ProfileScreen;