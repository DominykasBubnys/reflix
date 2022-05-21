import { View, ScrollView, Text } from 'react-native';
import MovieList from "../../components/movies/movies-list";
import Styles from "./Styles"
import React from 'react';

export const BrowseScreen = ({data}) => {


    return (
        <View style={Styles.container}>

            <ScrollView style={Styles.body}>

                <MovieList data={data} category_title = "most popular"/>

                <MovieList data={data} category_title = "top rated"/>

            </ScrollView>

        </View>
    )

};





export default BrowseScreen;