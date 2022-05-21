
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        borderColor: "rgba(5, 5, 5, 0.8)",
        borderWidth: 3,
        width: 260,
        margin: 10,
        borderRadius: 20,
        backgroundColor: "rgba(5, 5, 5, 0.9)",
        overflow: "hidden",
        flex: 1
    },

    tvContainer: {
        width: 265,
        margin: 10,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "rgba(5, 5, 5, 0.9)",
        overflow: "hidden",
        flex: 1
    },

    title: {
        textAlign: "center",
        padding: 10,
        fontSize: 20,
        color: "rgba(216, 187, 186, 0.8)"
    },

    image: {
        flex: 1,
        width: "100%"
    },

    button: {
        padding: 10,
        backgroundColor: "rgb(45, 36, 36)"
    },

    button_text: {
        fontSize: 15,
        color: "white"
    },

})

export default Styles;