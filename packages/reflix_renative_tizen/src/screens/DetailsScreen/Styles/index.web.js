import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "rgba(15, 15, 15, 0.7)",
        display: "flex",
        justifyContent: "space-around",
        alignItems:"center",
        flexDirection: "row"
    },

    image_container: {
        width: "25%",
        height: 350,
    },

    image: {
        width: "100%",
        height: "100%",
        borderRadius: 40,
        overflow: "hidden",
    },

    content_container: {
        width: "50%",
    },

    header: {
        color: "white",
        marginTop: 20,
        fontSize: 34,
        marginBottom: 15,
        letterSpacing: 3,
        textAlign: "center",
    },

    description_container: {
        backgroundColor: "#2F1D1D",
        borderRadius: 20,
        width: "90%",
        padding: 15,
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto"
    },

    description_header: {
        color: "white",
        textAlign: "center",
        fontSize: 28,
        marginBottom: 20
    },

    description_text: {
        marginLeft: "auto",
        marginRight: "auto",
        letterSpacing: 2,
        fontSize: 20,
        color: "#BA8E8E",
        textAlign: "center",
        padding: 10,
    },

    more_container: {
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 20,
    },

    more_info: {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 20,
        marginBottom: 10,
    },

    button_container: {
        marginBottom: 30,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    button: {
        backgroundColor: "#2F1D1D",
        padding: 5,
        margin: 10,
        width: "45%",
        borderRadius: 30,
    },

    button_color: {
        color: "#BA8E8E",
        fontSize: 25,
        textAlign: "center"
    }

    

})

export default Styles;