import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        marginTop: "10%",
        marginBottom: "20%",
    },

    container: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },



    form_dutton: {
        display: "flex",
        marginBottom: 20,
        padding: 10,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        width: "65%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgba(51, 77, 58, 0.5)",
        borderColor: "rgba(255,255,255,0.4)",
        borderWidth: 2
    },

    button_text: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },

    controlls_container: {
        paddingTop: "20%",
    }

})

export default style;