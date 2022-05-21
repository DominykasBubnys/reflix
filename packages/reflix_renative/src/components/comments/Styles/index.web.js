import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        backgroundColor: "black",
        maxHeight: "60%",
        opacity: 0.8

    },

    content: {
        borderColor: "#BA8E8E",
        borderWidth: 2,
        padding: 5,
        maxHeight: 200,
        overflow: "hidden",
        margin: 10,
        borderRadius: 30,

    },

    content_text: {
        color: "#BA8E8E",
        textAlign: "center"
    },
    content_auth: {
        color: "red",
        textAlign: "center"
    },

    text: {
       fontSize: 20,
       color: "#BA8E8E"
    },

    header: {
        fontSize: 30,
        color: "#BA8E8E",
        textAlign: "center",
        marginBottom: 20,
    }

    
})

export default Styles;