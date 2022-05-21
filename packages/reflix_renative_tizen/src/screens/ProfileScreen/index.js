
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Styles from './Styles/index';
import {useAuth} from "../../components/context/UserContext";
import { navigate } from '@reach/router';
import {ROUTES} from "../../config/config";
import CustomButton from "../../components/formElements/Button";
import { Button } from 'renative';

export const ProfileScreen = () => {

  const Auth = useAuth();
  const [showLibrary, setShowLibrary] = useState(false);

  const logoutHandler = () => {
    Auth.logout()
    navigate(ROUTES.HOME)
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

  return <View >
    {Auth.currentUser ?
      <View style={Styles.container}>        
        <Text style={Styles.header}>Email</Text>
        <Text style={Styles.dataText}>{Auth.currentUser.email} </Text>

        { Auth.library && Auth.currentUser && 
          <>
            <View style={Styles.library}>
              <Text style={Styles.libraryHeader}>Library ({Auth.library.length})</Text>
              {showLibrary && Auth && LibraryData()}
            </View>

            <Button 
              textStyle={Styles.textStyle} 
              style={Styles.button} 
              onEnterPress={() => setShowLibrary(!showLibrary)} 
              title={showLibrary ? "Hide library movies" : "Show library movies"} 
            />
          </>
          
        }
        <CustomButton 
          textStyles={Styles.textStyle} 
          style={Styles.button} 
          onEnterPress={logoutHandler} 
          title="Logout"
        />

      </View>

      :

      <View>

        <Text style={{color: "red", textAlign: "center", fontSize: 30}}>
          Please log in
        </Text>

      </View>
    }
  </View>
};

export default ProfileScreen;