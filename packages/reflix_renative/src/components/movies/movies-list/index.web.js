import React from 'react';
import { ScrollView, Text, View, StatusBar } from 'react-native';
import Styles from '../movies-styles/movie-list';
import MoviesItem from '../movie-item';

const MoviesList = (props) => {
    
    const {category_title, data} = props;

    const filteredMovies = data ? data.filter(movie => movie.category === category_title) : [];


    return (
        <View style={Styles.container}>

            <Text style={Styles.category_type}>{category_title}</Text>

            <ScrollView horizontal>

                {filteredMovies && filteredMovies.map(movie => {
                    return <MoviesItem key={Math.random()} movie={movie} />
                })}
            </ScrollView>
        </View>
    )
};

export default MoviesList
