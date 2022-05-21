import { Text, View, ScrollView, Pressable } from 'react-native';
import MovieList from '../components/movies/moviesList';
import Styles from "../styles/BrowseStyles"
import React from 'react';

export const BrowseScreen = ({navigation}) => {

  return (
    <View style={Styles.container}>

      <ScrollView style={Styles.body}>

        <MovieList category_title = "most popular"/>


        <MovieList category_title = "top rated"/>

      </ScrollView>

    </View>
  )
};

export default BrowseScreen;
