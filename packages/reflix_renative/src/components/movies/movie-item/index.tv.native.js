import React from 'react';
import { ImageBackground, Text, View, Platform, Pressable } from 'react-native';
import { Button } from 'renative';
import {useAuth} from "../../context/UserContext";
import { hasWebFocusableUI, ICON_LOGO, CONFIG, ROUTES, ThemeContext } from '../../../config/config';

import Styles from '../movies-styles/movie-item/index.tv.native.js';
//import { useNavigation } from '@react-navigation/native';
//import TvStyles from '../../styles/TvLinksStyles';
//import { navigate } from '../../navigation/navigation';

const FocusableView = hasWebFocusableUI ? withFocusable()(View) : View;


const MoviesItem = ({movie}) => {

  const Auth = useAuth();

  const navigation = Auth.navigation;

  const moviePressHandler = () => {

    navigation.navigate(ROUTES.DETAILS, {
      movie: movie,
    })

  }

  return <>

    <FocusableView style={{marginTop: 10, flexDirection: 'row'}} onBecameFocused={() => {console.log("Selected")}}>

        <View style={Styles.container}>
          <ImageBackground
              style={Styles.image}
              source={{
                uri: `${movie.coverImgURL}`,
              }}
          />
          <Button style={Styles.button} textStyle={Styles.button_text} onPress={moviePressHandler} title={movie.title} />

        </View>

    </FocusableView>

  </>
};

export default MoviesItem
