import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 15,
        paddingBottom: 50
    },

    header: {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 30,
        marginTop: 30,
    },

    image: {
        width: "80%",    
        height: 300,
        borderRadius: 300 / 2,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "20%", 
    },

    dataText : {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 20,
        marginTop: 15,
    },

    bodyData: {
        borderColor: 'blue',
        borderWidth: 3
    },

    library: {
        marginTop: 40,
        borderRadius: 30,
        backgroundColor: "rgb(0, 0, 0)",
        padding: 10,
        marginBottom: 30
    },

    libraryHeader: {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 35,

    },

    textStyle: {
        color: "#BA8E8E",
        fontSize: 20,
        letterSpacing: 3
    },  

    button: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "25%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgba(51, 70, 58, 0.5)",
        borderRadius: 20,
        padding: 5,
        margin: 10,
        borderColor: "white",
        borderWidth: 1,
    }

})

export default Styles;