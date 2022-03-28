import React from 'react';
import { ImageBackground, Text, View, Image, Pressable } from 'react-native';
import Styles from '../../styles/MovieItem';
import { useNavigation } from '@react-navigation/native';

const MoviesItem = ({movie}) => {

  const navigation = useNavigation();

  const moviePressHandler = () => {
    navigation.navigate("Details", {
      movie: movie,
    })
  }

  return <Pressable onPress={moviePressHandler} style={Styles.container}>

    <ImageBackground
        style={Styles.image}
        source={{
          uri: `${movie.coverImgURL}`,
        }}
    />
    <Text style={Styles.title}>{movie.title}</Text>

      
  </Pressable>
};

export default MoviesItem
