import React, { useEffect } from 'react';
import { Text, View, Platform, StyleSheet, Keyboard } from 'react-native';
import Button from '../components/formElements/Button';
import Styles from '../styles/HomeStyles';
import {useAuth} from "../components/context/UserContext"
import { navigate } from '../navigation/navigation';
import FocusableHighlight from '../focusable/FocusableHighlight';
import TvStyles from "../styles/TvLinksStyles";

export const HomeScreen = (props) => {

  const Auth = useAuth();
  TvStyles.buttonFocusedColor = "rgba(0, 0, 0, 0.7)"

  
  useEffect(() => {Auth.setUserNavigation(props.navigation)}, []);

  return (
    <View style={Styles.container}>
        <Text style={Platform.isTV ? Styles.header_forTVS : Styles.header}>Reflix</Text>
        

        {Platform.isTV ? 

        <>

          <FocusableHighlight
            onPress={() => {
              navigate("Browse");
            }}
            style={Styles.tv_menu_btn}
            underlayColor={TvStyles.buttonFocusedColor}
            nativeID={"_browse"}
            key={"_browse"}>
            <Text style={Styles.tv_btn_text} >Browse</Text>
          </FocusableHighlight>

          {!Auth.currentUser && <FocusableHighlight
            onPress={() => {
              navigate("Auth");
            }}
            style={Styles.tv_menu_btn}
            underlayColor={TvStyles.buttonFocusedColor}
            nativeID={"_auth"}
            key={"_auth"}>
            <Text style={Styles.tv_btn_text} >Authenticate</Text>
          </FocusableHighlight>}

          {Auth.currentUser && <FocusableHighlight
            onPress={() => {
              navigate("Profile");
            }}
            style={Styles.tv_menu_btn}
            underlayColor={TvStyles.buttonFocusedColor}
            nativeID={"_auth"}
            key={"_auth"}>
            <Text style={Styles.tv_btn_text}>Profile</Text>
          </FocusableHighlight>}
        </>
        :
        
        <>
          <Button onPress={() => props.navigation.navigate("Browse")} title = "Browse" />
          {!Auth.currentUser && <Button onPress={() => props.navigation.navigate("Auth")} title = {"Authenticate"} />}
          {Auth.currentUser && <Button onPress={() => props.navigation.navigate("Profile")} title = {"Profile"}/>}
        </>
        
        }
        
    </View>
  )
};


export default HomeScreen;
