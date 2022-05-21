import { Text, View, ScrollView, ImageBackground, Alert, Pressable, Modal, TouchableOpacity} from 'react-native';
import Styles from "./Styles/index";
import React, { useState } from 'react';
import {useAuth} from "../../components/context/UserContext";
import {Button} from "renative"
import CustomModal from "../../components/CustomModal";
import Comments from '../../components/comments';

export const DetailsScreen = ({navigation, route}) => {

  const Auth = useAuth();
  const [showModal, setShowModal] = useState(false);

  const movie = route.params.movie;


  const showTrailerHandler = () => {
    navigation.navigate("Player", {
      movie: movie,
    })
  }

  const showCommentsModal = () => {
    setShowModal(true);
  }

  const closeCommentsModal = () => {
    setShowModal(false);
  }
  
  const addToLibraryHandler = async() => {
    if(Auth.currentUser){

      try {
        await Auth.addMovieToLibrary(movie);
      } catch (error) {
        Alert.alert(error.message || "Cannot add to library");
      }


    }
    else if(!Auth.currentUser)Alert.alert("Please login")
  }

  


  return (

    <ScrollView style={Styles.container}>


      <Text style={Styles.header}>{movie.title}</Text> 

      <View style={Styles.image_description}>

        <View style={Styles.image_container}>
          <ImageBackground
            style={Styles.image}
            source={{
              uri: movie.coverImgURL,
            }}
          />
        </View>

        <View style={Styles.description_container}>
          <Text style={Styles.description_header}>Description</Text>
          <Text style={Styles.description}>
            {movie.storyLine ? movie.storyLine : "No description"}
          </Text>
        </View>

        <Pressable onPress={showCommentsModal}>
          <Text style={Styles.description_header}>Show comments ({5})</Text>
        </Pressable>

        {showModal && 
          <CustomModal onPress={closeCommentsModal}>
            <Comments />
          </CustomModal>
        }

      </View>

      <View>

        <Text style={Styles.more_info}>Category: {movie.category}</Text>
        <Text style={Styles.more_info}>Rate: {movie.rate}</Text>
        <Text style={Styles.more_info}>Genres: {movie.genres && movie.genres[0]}</Text>

      </View>

      <View style={Styles.button_container}>

          <Button
            style={Styles.button}
            textStyle={Styles.button_color}
            title="Add to library"
            onPress={addToLibraryHandler}
            onEnterPress={addToLibraryHandler}
          />

          <Button
            style={Styles.button}
            textStyle={Styles.button_color}
            title="Preview trailer"
            onPress={showTrailerHandler}
            onEnterPress={showTrailerHandler}
          />

        </View>

    </ScrollView>
  )
};

export default DetailsScreen;