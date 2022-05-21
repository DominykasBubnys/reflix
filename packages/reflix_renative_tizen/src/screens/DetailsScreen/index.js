import { Text, View, ScrollView, ImageBackground, Alert } from 'react-native';
import Styles from "./Styles";
import React, { useState } from 'react';
import {useAuth} from "../../components/context/UserContext";
import CustomButton from "../../components/formElements/Button";
import ErrorModal from "../../components/errorModal/index.js"

export const DetailsScreen = ({ location }) => {

  const Auth = useAuth();
  const [error, setError] = useState(null);
  const { movie } = location.state;

  const showTrailerHandler = () => console.log("Watching trailer...");
  
  const addToLibraryHandler = async() => {
    if(Auth.currentUser){

      try {
        const addToLibraryReq = await Auth.addMovieToLibrary(movie);

        if(!addToLibraryReq)setError("You already added this movie");

      } catch (error) {

        Alert.alert(error.message || "Cannot add to library");
      }

    }
    else setError("Please log in");
  }



  return (
    <View>

      {
        error ?

        <ErrorModal onClose={() => setError(null)} message={error} />

        :

        <>
          <Text style={Styles.header}>{movie.title}</Text> 

          <View style={Styles.container}>

            <View style={Styles.image_container}>
              <ImageBackground
                style={Styles.image}
                source={{
                  uri: movie.coverImgURL,
                }}
              />
            </View>

            <View style={Styles.content_container}>  

              <View style={Styles.description_container}>
                <Text style={Styles.description_header}>Description</Text>
                <Text style={Styles.description_text}>
                  {movie.storyLine ? movie.storyLine : "No description"}
                </Text>
              </View>
              
              <View style={Styles.more_container}>
                <Text style={Styles.more_info}>Category: {movie.category}</Text>
                <Text style={Styles.more_info}>Rate: {movie.rate}</Text>
                <Text style={Styles.more_info}>Genres: {movie.genres && movie.genres[0]}</Text>
              </View>
              
              <View style={Styles.button_container}>
                <CustomButton
                  style={Styles.button}
                  textStyles={Styles.button_color}
                  title="Add to library"
                  onPress={addToLibraryHandler}
                  onEnterPress={addToLibraryHandler}
                />
                <CustomButton
                  style={Styles.button}
                  textStyles={Styles.button_color}
                  title="Preview trailer"
                  onPress={showTrailerHandler}
                  onEnterPress={showTrailerHandler}
                />
              </View>  

            </View>
          </View>
        </>
      }
    
    </View>
  )
};

export default DetailsScreen;