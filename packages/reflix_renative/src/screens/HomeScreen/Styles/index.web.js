import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    color: {
        color: "white",
        fontSize: 25

    },

    header: {
        color: "white",
        textAlign: "center",
        marginTop: 60,
        marginBottom: "8%",
        fontSize: 70,
        letterSpacing: 3,
        borderColor: "red"
    },

    controlls: {
        width: "55%",
        marginLeft: "auto",
        marginRight: "auto",
    },

    button: {
        display: "flex",
        margin: 20,
        padding: 15,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgba(51, 77, 58, 0.5)",
    },
})

export default style;