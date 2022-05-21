import Styles from "./source/styles/AppStyles"
import { AuthProvider } from "./source/components/context/UserContext";
import Header from "./source/components/header";
import MainRouter from "./source/navigation/MainRouter"
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar
} from 'react-native';


const App = () => {

  console.log("Hello from App.js Main component")


  const backgroundImage_Url = "./assets/movie_background.jpg";

  return (
    <AuthProvider>

      <View style={Styles.container}>
        <StatusBar hidden/>


        <ImageBackground source={require(backgroundImage_Url)} style={Styles.image}>
          
          <Header />

          <MainRouter />
          
        </ImageBackground>
        
      </View>
      
    </AuthProvider>

    
    
  )
};

export default App;
