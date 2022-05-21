import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "brown",
        opacity: 0.4,
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%",
        borderRadius: 40,
        marginTop: "10%",
        maxHeight: 400,
        overflow: "hidden"
    },

    text: {
       fontSize: 28,
       textAlign: "center",
       color: "white"
    },

    button: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%",
        backgroundColor: "black",
        borderRadius: 20,
        padding: 5,
        margin: 10,
        marginTop: 50,
    },

    button_text: {
        color: "white",
        letterSpacing: 3,
        fontSize: 18
    }

    
})

export default Styles;