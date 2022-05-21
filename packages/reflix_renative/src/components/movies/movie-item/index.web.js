import React from 'react';
import { ImageBackground, Text, View, Pressable } from 'react-native';
import { useRouter } from 'next/router';
import {useAuth} from "../../context/UserContext";
import { ROUTES } from '../../../config/config';

import Styles from '../movies-styles/movie-item/index';
//import { useNavigation } from '@react-navigation/native';
//import TvStyles from '../../styles/TvLinksStyles';
//import { navigate } from '../../navigation/navigation';


const MoviesItem = ({movie}) => {

  const Auth = useAuth();
  const router = useRouter();

  const moviePressHandler = () => router.push(`/movies/${movie.id}`)


  return <>

    <Pressable style={{marginTop: 10, flexDirection: 'row'}} onPress={moviePressHandler}>

        <View style={Styles.container}>
          <ImageBackground
              style={Styles.image}
              source={{
                uri: `${movie.coverImgURL}`,
              }}
          />
          <Text style={Styles.text}>{movie.title}</Text>
          
        </View>

    </Pressable>

  </>
};

export default MoviesItem
