import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';
import Styles from '../../styles/MoviesList';
import MoviesItem from './movieItem';
import LoadingSpinner from "../loadingSpinner";
import fetchMovies from "../units/fetchMovies";

const MoviesList = (props) => {
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {category_title} = props;


    

    useEffect(() => {

        const fetchData = async () => {

            try {
                
                setIsLoading(true);
    
                const request = await fetchMovies(category_title);
    
                if(!request.ok)throw new Error(request.message || "failed to load data");
    
                setMovies(request.data.filter(movie => movie.category === category_title));
    
                setIsLoading(false)
    
            } catch (err) {
                Alert.alert(err.message || "Unexpected error");
            }
        }

        
        fetchData();
    }, [])



    return (
        <View style={Styles.container}>

            <Text style={Styles.category_type}>{category_title}</Text>

            {isLoading && <LoadingSpinner />}

            {!isLoading && <ScrollView horizontal>
                {movies && movies.map(movie => {
                    return <MoviesItem key={Math.random()} movie={movie} />
                })}
            </ScrollView>}
        </View>
    )
};

export default MoviesList
