import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "rgba(15, 15, 15, 0.7)",

    },

    header: {
        color: "white",
        textAlign: "center",
        marginTop: 10,
        fontSize: 34,
        marginBottom: 10
    },

    image_description: {

        width: "95%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        padding: 20,


    },

    image_container: {
        width: "30%",
        height: 300,

    },

    image: {
        width: "100%",
        height: "100%",
        borderRadius: 40,
        overflow: "hidden",
    },

    description: {
        marginLeft: "auto",
        marginRight: "auto",
        letterSpacing: 2,
        fontSize: 20,
        color: "#BA8E8E",
        textAlign: "center",
        padding: 10,
    },

    description_header: {
        color: "white",
        textAlign: "center",
        fontSize: 28,
        marginBottom: 20
    },

    description_container: {
        backgroundColor: "#2F1D1D",
        borderRadius: 20,
        width: "95%",
        padding: 15,
        marginLeft: "auto",
        marginRight: "auto"
    },

    more: {
        backgroundColor: "#2F1D1D",
        marginBottom: 80,
        borderRadius: 20,
        paddingBottom: 30,
    },

    more_info: {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 20,
        marginBottom: 20,
    },

    button_container: {
        marginBottom: 30,
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    button: {
        backgroundColor: "#2F1D1D",
        padding: 10,
        margin: 10,
        width: "30%",
        borderRadius: 30,
    },

    comments_button: {
        backgroundColor: "#2F1D1D",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",
        borderRadius: 30,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        borderTopWidth: 2,
        borderTopColor: "white"

    },

    button_color: {
        color: "#BA8E8E"
    }

    

})

export default Styles;