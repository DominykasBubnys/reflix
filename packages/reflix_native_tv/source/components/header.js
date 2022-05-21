import React from 'react';
import { Pressable, Text, View, Platform, StyleSheet } from 'react-native';
import Styles from '../styles/HeaderStyles';
import { useAuth } from './context/UserContext';
import FocusableHighlight from '../focusable/FocusableHighlight';
import { navigate } from '../navigation/navigation';
import TvStyles from '../styles/TvLinksStyles';

const Header = () => {

  const Auth = useAuth();
  TvStyles.buttonFocusedColor = "#674c47"//"rgba(127,67,48,0.5)"

  const onLogoutHandler = () => {
      Auth.logout();

      if(!Platform.isTV){
        if(Auth.navigation)
          Auth.navigation.navigate("Home")
      }

      if(Platform.isTV){
        navigate("Home")
      }
      
  }

  const onHomeHandler = () => {

    if(Platform.isTV){
      navigate("Home")
    }

    if(!Platform.isTV){
      if(Auth.navigation)
        Auth.navigation.navigate("Home")
    }
    
  }

  const onLoginHandler = () => {

    if(Platform.isTV){
      navigate("Auth")
    }

    
  }

  const onProfileHandler = () => {

    if(!Platform.isTV){
      if(Auth.navigation)
        Auth.navigation.navigate("Profile")
    }
    if(Platform.isTV){
      navigate("Profile")
    }
    
  }

  return (
    <>
      { !Platform.isTV ? 
        <View style={Styles.container}>
          <Pressable onPress={onHomeHandler}><Text style={Styles.text}>Home</Text></Pressable>
          {Auth.currentUser && <Pressable onPress={onProfileHandler}><Text style={Styles.text}>Profile</Text></Pressable>}
          {Auth.currentUser && <Pressable onPress={onLogoutHandler}><Text style={Styles.text}>Logout</Text></Pressable>}
        </View>:



        <View style={Styles.container}>
          <FocusableHighlight
            onPress={() => {}}
            nativeID={"_none"}
            key={"_none"} >
              <Text>.</Text>
          </FocusableHighlight>

          <FocusableHighlight
            onPress={onHomeHandler}
            underlayColor={TvStyles.buttonFocusedColor}
            nativeID={"_homes"}
            style={btnStyle.btn}
            key={"_homes"}  >
              <Text style={Styles.text}>Home</Text>
          </FocusableHighlight>

          { !Auth.currentUser && <FocusableHighlight
            onPress={onLoginHandler}
            underlayColor={TvStyles.buttonFocusedColor}
            nativeID={"_login"}
            style={btnStyle.btn}
            key={"_login"}  >
              <Text style={Styles.text}>Login</Text>
          </FocusableHighlight>}

          { Auth.currentUser && 
            <FocusableHighlight
              onPress={onProfileHandler}
              underlayColor={TvStyles.buttonFocusedColor}
              nativeID={"_profile"}
              style={btnStyle.btn}
              key={"_profile"}  >
                <Text style={Styles.text}>Profile</Text>
            </FocusableHighlight>
          }

          { Auth.currentUser && 
            <FocusableHighlight
              onPress={onLogoutHandler}
              underlayColor={TvStyles.buttonFocusedColor}
              nativeID={"_logout"}
              style={btnStyle.btn}
              key={"_logout"} >
                <Text style={Styles.text}>Logout</Text>
            </FocusableHighlight>
          }
        </View>    
      }

    </>
  )
};


const btnStyle = StyleSheet.create({
  btn: {
    width: "15%",
    alignItems: "center",
    borderRadius: 40,
  }
})

export default Header;