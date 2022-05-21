import React from 'react';
import { ImageBackground, Text, View, Platform, Pressable } from 'react-native';
import { Button } from 'renative';
import {useAuth} from "../../context/UserContext";
import { ROUTES } from '../../../config/config';
import CustomButton from "../../formElements/Button"
import Styles from '../movies-styles/movie-item';
import { navigate } from '@reach/router';


const MoviesItem = (props) => {

  const {movie, id, onFocus} = props;

  const Auth = useAuth();

  const moviePressHandler = () => {

    navigate(ROUTES.DETAILS, { state: { movie: movie }});


  }

  return <>

    <View style={{marginTop: 10, flexDirection: 'row'}} onBecameFocused={() => {console.log("Selected")}}>

        <View style={Styles.container}>
          <ImageBackground
              style={Styles.image}
              source={{
                uri: `${movie.coverImgURL}`,
              }}
          />
          <>

            {
              onFocus && id===0 
              
              ? 

              <CustomButton 
                style={Styles.button} 
                textStyles={Styles.button_text} 
                onEnterPress={moviePressHandler} 
                onPress={moviePressHandler}
                title={movie.title} />

              :

              <Button 
                style={Styles.button} 
                textStyle={Styles.button_text} 
                onEnterPress={moviePressHandler} 
                onPress={moviePressHandler}
                title={movie.title} />
              
            }
          
          </>

        </View>

    </View>

  </>
};

export default MoviesItem
