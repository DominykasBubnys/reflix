import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
        backgroundColor: "transparent",
        borderRadius: 30,
        padding: 20,
    },

    status_container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "70%",
        height: 30,
        marginBottom: 20,
    },

    status_header: {
        alignSelf: "flex-start",

        color: "red"
    },

    status_text: {
        alignSelf: "flex-end",
        color: "green"
    },

    user: {
      fontSize: 20,
      textAlign: "center",
      letterSpacing: 2,
      color: "#BA8E8E",
      margin: 10,
    },

    library_header: {

        fontSize: 20,
        color: "#BA8E8E",
        textAlign: "center",
        margin: 10

    },

    library_length: {

        fontSize: 15,
        color: "brown",
        alignSelf: "flex-end",
        marginTop: 0,
        marginBottom: 8

    },

    library_container: {
        width: "80%",
        margin: 10,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },

    library_movies_container: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BA8E8E",
        borderRadius: 30,
    },

    dataText: {
        color: "white",
        fontSize: 18,
        
    }
})

export default style;