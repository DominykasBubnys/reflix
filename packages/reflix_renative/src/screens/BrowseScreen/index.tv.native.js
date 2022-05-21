import { View, ScrollView } from 'react-native';
import MovieList from "../../components/movies/movies-list";
import Styles from "./Styles/index.tv.native"
import React from 'react';

export const BrowseScreen = () => {

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