
import React, { useContext, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Styles from './Styles/index';
import Button from "../../components/formElements/Button/index.web";
import {useAuth} from "../../components/context/UserContext";
import { useRouter } from 'next/router';
import {ROUTES} from "../../config/config";

export const ProfileScreen = () => {

  const Auth = useAuth();
  const router = useRouter();
  const [showLibrary, setShowLibrary] = useState(false);

  const logoutHandler = () => {
    Auth.logout()
    if(router)
      router.push(ROUTES.HOME)
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
        <Button textStyle={Styles.textStyle} style={Styles.button} onPress={logoutHandler} title="Logout"/>
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