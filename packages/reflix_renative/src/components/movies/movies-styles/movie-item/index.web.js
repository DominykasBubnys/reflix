
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        borderColor: "rgba(5, 5, 5, 0.8)",
        borderWidth: 3,
        width: 300,
        height: 400,
        margin: 10,
        borderRadius: 20,
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

    text: {
        color: "#BA8E8E",
        padding: 10,
        fontSize: 25,
        textAlign: "center"
    }


})

export default Styles;