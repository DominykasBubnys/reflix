import React from 'react';
import { ImageBackground, Text, View, Platform, Pressable } from 'react-native';
import Styles from '../../styles/MovieItem';
import { useNavigation } from '@react-navigation/native';
import FocusableHighlight from '../../focusable/FocusableHighlight';
import TvStyles from '../../styles/TvLinksStyles';
import { navigate } from '../../navigation/navigation';

const MoviesItem = ({movie}) => {

  TvStyles.buttonFocusedColor = "#674c47"

  const navigation = useNavigation();

  const moviePressHandler = () => {

    if(Platform.isTV){
      navigate("Details", movie);
    }
    else{
      navigation.navigate("Details", {
        movie: movie,
      })
    }
    
  }

  return <>
  
    { !Platform.isTV ? <Pressable onPress={moviePressHandler} style={Styles.container}>

      <ImageBackground
          style={Styles.image}
          source={{
            uri: `${movie.coverImgURL}`,
          }}
      />
      <Text style={Styles.title}>{movie.title}</Text>

        
    </Pressable>

    :

    <FocusableHighlight
      onPress={moviePressHandler}
      style={Styles.tvContainer}
      underlayColor={TvStyles.buttonFocusedColor}
      nativeID={movie.title}
      key={movie.title}
    >

      <View style={Styles.container}>
        <ImageBackground
            style={Styles.image}
            source={{
              uri: `${movie.coverImgURL}`,
            }}
        />
        <Text style={Styles.title}>{movie.title}</Text>

      </View>
      
    </FocusableHighlight>

    // <Pressable onPress={moviePressHandler} style={Styles.container}>

      

        
    // </Pressable>
  }
  
  </>
};

export default MoviesItem
