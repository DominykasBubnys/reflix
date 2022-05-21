

import React from "react";
import { Text, View, StyleSheet } from "react-native";
// import Video from "react-native-video";

const Player = ({navigation, route}) => {

  const movie = route.params;

  const trailerUrl = movie.videoURL;
  const defaultTrailer = 'https://imdb-video.media-imdb.com/vi3974546201/1434659607842-pgv4ql-1637159650571.mp4?Expires=1650109488&Signature=Zb8Mm8-xJORzzQbLFX8NqdZ9SamTNwIT30XRTWkA1Nhg2OK2dT3utLnKZRrTxkPgmrZ5rcGUU1pbTVA46UO3TWt1R3-yhPq5rjdvmZ-ufrlaT-AuMO6pav3KgUjPFEQTzg8LsvjqPvM2jTyEoXyGfZNaEcRq~axoPBHWCCwRRHgx2~LPKi4ZQW8LlTdGE8dKUEKdFA~HaoRoXbEwPKxx5XZ44mDw2KFMhrBR5NVw7YA9xtUFJqKhH1PqEFpHAHakqcKgcoVRnmkfmUFduVt5jREt1XVZNI65w7DXiDW~HOM7nRzWJopl87MkYy9I6v4nrxL~WnMFev3hlgxZz8dIMA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA';
  //movie.videoURL;

  return (
    <View style={styles.container}>
      {/* <Video
        volume={100}
        source={
          {
            uri: defaultTrailer
          }
        }
        style={styles.mediaPlayer}
      />
      <MediaControls
      duration={duration}
      isLoading={isLoading}
      mainColor="#333"
      onFullScreen={onFullScreen}
      onPaused={onPaused}
      onReplay={onReplay}
      onSeek={onSeek}
      onSeeking={onSeeking}
      playerState={playerState}
      progress={currentTime}
      toolbar={renderToolbar()}
      /> */}

      <Text style={{color: "red"}}>
        Hello from player screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    width: "50%",
    height: "50%"
  },
});

export default Player;