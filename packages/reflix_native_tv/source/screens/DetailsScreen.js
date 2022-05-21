import { Alert, ImageBackground, Pressable, ScrollView, Text, View, Platform } from 'react-native';
import Styles from '../styles/DetailsStyles';
import Button from "../components/formElements/Button";
import React, { useState, useContext } from 'react';
import addToLibrary from "../components/units/addToLibrary"
import { useAuth } from '../components/context/UserContext';
import FocusableHighlight from '../focusable/FocusableHighlight';
import TvStyles from "../styles/TvLinksStyles";

export const DetailsScreen = (props) => {

  const {navigation, route} = props;

  const movie = Platform.isTV ? route.params : route.params.movie;

  const { addMovieToLibrary, doesMovieExistInLibrary } = useAuth();
  const Auth = useAuth()

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const showTrailerHandler = () => {
    navigation.navigate("Player", movie)
  }

  const addToLibraryHandler = async() => {
    if(Auth.currentUser){
      
      if(!movie) return null;

      try {
        const resp = await addMovieToLibrary(movie);

        console.log("is added to library? ", resp);

        if(!resp)Alert.alert("This movie already exists in your library! ");
        
      } catch (error) {
        Alert.alert(error.message || "Cannot add to library");
      }

    }
    else if(!Auth.currentUser)Alert.alert("Please login")
  }

  return (

    <>
    { movie && <ScrollView style={Styles.container}>
        
        <Text style={Platform.isTV ? Styles.tvHeader : Styles.header}>{movie.title}</Text> 

        <ImageBackground
          style={Platform.isTV ? Styles.tvImage : Styles.image}
          source={{
            uri: movie.coverImgURL,
          }}
        />

        <View style={Platform.isTV ? Styles.tv_description_container : Styles.description_container}>
          {
            Platform.isTV ? <FocusableHighlight
              onPress={() => {}}
              nativeID={"_movie_details"}
              key={"_movie_details"}
            >

              <Text style={Styles.tvHeader}>Description</Text>

            </FocusableHighlight>: 

            <Text style={Styles.header}>Description</Text>
          }
          <Text style={Styles.description}>
            {movie.storyLine ? movie.storyLine : "No description"}
          </Text>
          
        </View>

        <>
          { Platform.isTV ? 


          <View style={Styles.tv_more}>
            
            <Text style={Styles.tvHeader}>More information</Text>

            <View>
              <Text style={Styles.tv_more_info}>Category: {movie.category}</Text>
              <Text style={Styles.tv_more_info}>Rate: {movie.rate}</Text>
              <Text style={Styles.tv_more_info}>Genres: {movie.genres && movie.genres[0]}</Text>


            <FocusableHighlight
            onPress={addToLibraryHandler}
            nativeID={"_to-library"}
            style={Styles.tv_button}
            underlayColor={TvStyles.buttonFocusedColor}
            key={"_to-library"}>
              <Text style={Styles.tv_button_text}>Add to library</Text>
            </FocusableHighlight>

            <FocusableHighlight
            onPress={showTrailerHandler}
            nativeID={"_trailer"}
            style={Styles.tv_button}
            underlayColor={TvStyles.buttonFocusedColor}
            key={"_trailer"}>
              <Text style={Styles.tv_button_text}>Preview trailer</Text>
            </FocusableHighlight>

            </View>

          </View>
          
          
          : 
          
          
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

          </Pressable>}
        </>

        


      </ScrollView>}

      {!movie && <Text>Failed to get movie</Text>}
    
    </>

    
  )
};

export default DetailsScreen;