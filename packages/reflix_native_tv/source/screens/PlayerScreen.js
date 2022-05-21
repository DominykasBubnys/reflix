

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Video from "react-native-video";

const Player = ({navigation, route}) => {

  const movie = route.params;

  const trailerUrl = movie.videoURL;
  const defaultTrailer = 'https://imdb-video.media-imdb.com/vi642564889/1434659607842-pgv4ql-1648059831816.mp4?Expires=1649338001&Signature=RS0PEwabvtYrCktT3OkBPe6RmHufAeSlJ073s81L6wivIOx2Om2dLUz9zmBa7-9e22eLzzU1lDTf8opeka3seKxMvyAc~0FB4LAiTVT5j9vekO-yAdpzHoK41MHhJqrLKDCtd8bfTeCUQuTL7D~3fduThzUjVqXy0Gy4BNo8KW7tA9FCUZUumvALNvFTy1Hxr7e-uF1dI1xkGef3TKgEO7bm3a4FHHIXEm12ED6O~yZVhtKsjS0zWwjzD3rcyhyyxQkBzA8Qrr3-ut7FglcL45iB~iwg54q3crpYPj109T7Nll5NVVnYJPq5zbuXzJ1QGGxBqxcrvK4ADFCxlQKSzw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA';
  //movie.videoURL;

  return (
    <View style={styles.container}>
      <Video
        volume={100}
        source={
          {
            uri: defaultTrailer
          }
        }
        style={styles.mediaPlayer}
      />
      {/* <MediaControls
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