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
        marginTop: "5%",
        fontSize: 34,
        marginBottom: "10%",
    },

    description: {
        marginLeft: "auto",
        marginRight: "auto",
        letterSpacing: 2,
        fontSize: 25,
        color: "#BA8E8E",
        textAlign: "center",
    },

    description_container: {
        marginTop: 40,
        padding: 20,
        backgroundColor: "#2F1D1D",
        borderRadius: 20,
        marginBottom: 70,
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

    image: {
        width: "100%",
        height: 300,
        overflow: "hidden",
        borderRadius: 30,

    },

    // TV styles

    tvImage: {
        width: 220,
        height: 220,
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "hidden",
        borderRadius: 30,
    },

    tvHeader: {
        color: "white",
        textAlign: "center",
        marginTop: "3%",
        fontSize: 34,
        marginBottom: "5%",
    },

    tv_more_info: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 20,
        marginBottom: 20,
        width: "40%",
    },

    tv_header: {
        color: "white",
        textAlign: "center",
        fontSize: 30,
        marginBottom: 5,
    },

    tv_more: {
        width: "70%",
        backgroundColor: "#2F1D1D",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 80,
        borderRadius: 20,
        paddingBottom: 30,
    },

    tv_description_container: {
        marginRight: "auto",
        marginLeft: "auto",
        width: "90%",
        marginTop: 20,
        backgroundColor: "#2F1D1D",
        borderRadius: 20,
        marginBottom: 70,
    },

    tv_button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(51, 77, 58, 0.3)",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        borderRadius: 20
    },

    tv_button_text: {
        fontSize: 20,
        margin: 5,
        color: "#BA8E8E"
    }

})

export default Styles;