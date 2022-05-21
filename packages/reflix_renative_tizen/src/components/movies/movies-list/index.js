import React, {useState, useEffect} from 'react';
import { ScrollView, Text, View, StatusBar } from 'react-native';
import Styles from '../movies-styles/movie-list';
import MoviesItem from '../movie-item';
import fetchMovies from '../../units/fetchMovies';


const MoviesList = (props) => {
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {category_title, onFocus} = props;  

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

    const filteredMovies = movies ? movies.filter(movie => movie.category === category_title) : [];


    return (
        <View style={Styles.container}>

            <Text style={Styles.category_type}>{category_title}</Text>

            {!isLoading && filteredMovies ? 
                <ScrollView horizontal>

                    {filteredMovies && filteredMovies.map((movie, i) => {
                        return <MoviesItem key={Math.random()} id={i} onFocus={onFocus} movie={movie} />
                    })}
                </ScrollView>

                :

                <Text style={{color: "brown", marginTop: 10, fontSize: 20, marginBottom: "10%", textAlign: "center"}}>Loading...</Text>
            
            }
        </View>
    )
};

export default MoviesList
