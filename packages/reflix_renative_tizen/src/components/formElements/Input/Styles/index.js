import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        margin: 10,
        opacity: 0.4,
        borderRadius: 15,
        padding: 15
    },

    input: {
        flex: 2,
        color: "white",
        letterSpacing: 2,
        textAlign: "center",
        padding: 10,
        borderRadius: 20
    },

    button: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
        marginRight: 20
    }
})

export default style;