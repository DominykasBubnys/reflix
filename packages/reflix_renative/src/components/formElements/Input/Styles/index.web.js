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
        borderColor: "white",
        borderWidth: 2,
        margin: 15,
        backgroundColor: "#BA8E8E",
        opacity: 0.5,
        padding: 10,
        borderRadius: 15,
    },

    input: {
        flex: 2,
        color: "red",
        fontSize: 40,
        textAlign: "center",
    },
})

export default style;