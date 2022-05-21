import { Alert, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import Styles from '../styles/DetailsStyles';
import Button from "../components/formElements/Button"
import MoviesList from '../components/movies/moviesList';
import React, { useState, useContext } from 'react';
import addToLibrary from "../components/units/addToLibrary"
import { UserContext } from '../components/context/UserContext';

export const DetailsScreen = ({navigation, route}) => {

  const movie = route.params.movie;
  const Auth = useContext(UserContext);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const showTrailerHandler = () => {
    navigation.navigate("Player", {
      movie: movie,
    })
  }

  const addToLibraryHandler = async() => {
    if(Auth.isLoggedIn){
      const addedToLibraryRezult = await addToLibrary(movie, Auth.user._id);
      
      if(addedToLibraryRezult.statusOK){
        Auth.resetLibrary(addedToLibraryRezult.user.library);
      }
      else Alert.alert(addedToLibraryRezult.message || "Unexpected error");
    }
    else if(!Auth.isLoggedIn)Alert.alert("Please login")
  }

  return (

    <ScrollView style={Styles.container}>
      
      <Text style={Styles.header}>{movie.title}</Text> 

      <ImageBackground
        style={Styles.image}
        source={{
          uri: movie.coverImgURL,
        }}
      />

      <View style={Styles.description_container}>
        <Text style={Styles.header}>Description</Text>
        <Text style={Styles.description}>
          {movie.storyLine ? movie.storyLine : "No description"}
        </Text>
        
      </View>

      <Pressable onPress={() => setShowMoreInfo(!showMoreInfo)} style={Styles.more}>
        
        <Text style={Styles.header}>More information</Text>
        
        {showMoreInfo && 
          <View>
            <Text style={Styles.more_info}>Category: {movie.category}</Text>
            <Text style={Styles.more_info}>Rate: {movie.rate}</Text>
            <Text style={Styles.more_info}>Genres: {movie.genres && movie.genres[0]}</Text>

            <Button onPress={addToLibraryHandler} title="Add to library" />
            <Button onPress={showTrailerHandler} title="Preview trailer" />
            
          </View>
        }

      </Pressable>

      <MoviesList category_title = "Similar movies" category_url = {`/movie/${movie.id}/similar`} />


    </ScrollView>
  )
};

export default DetailsScreen;