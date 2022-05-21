import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        margin: 10,
        backgroundColor: "#BA8E8E",
        opacity: 0.5,
        borderRadius: 15,
    },

    input: {
        flex: 2,
        color: "red",

        textAlign: "center",
        fontSize: 25,
    },
})

export default style;