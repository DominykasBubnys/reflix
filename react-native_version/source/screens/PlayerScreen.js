import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

const PlayerScreen = ({route}) => {
    const movie = route.params.movie;

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                uri: movie.videoURL || null,
                }}
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
}

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    alignSelf: 'center',
    width: "90%",
    height: 200,
    borderRadius: 20
  },
  buttons: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
  },
});