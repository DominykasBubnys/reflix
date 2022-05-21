
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        borderColor: "rgba(5, 5, 5, 0.8)",
        borderWidth: 3,
        width: 200,
        height: 300,
        margin: 10,
        borderRadius: 20,
        backgroundColor: "rgba(5, 5, 5, 0.9)",
        overflow: "hidden",
        flex: 1,
        paddingBottom: 20,
    },

    image: {
        flex: 1,
        width: "100%"
    },

    button: {
        padding: 10,
        paddingTop: 20,
        backgroundColor: "rgb(45, 36, 36)"
    },

    button_text: {
        letterSpacing: 2,
        color: "white"
    },

})

export default Styles;