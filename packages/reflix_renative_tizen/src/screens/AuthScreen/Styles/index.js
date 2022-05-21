import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        color: "white",
        textAlign: "center",
        fontSize: 34,
        marginTop: 20,
        marginBottom: 10,
    },

    container: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "blue",
        borderWidth: 2,
    },



    form_button: {
        display: "flex",
        marginBottom: 20,
        padding: 10,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgba(51, 77, 58, 0.5)",
        borderColor: "rgba(255,255,255,0.4)",
        borderWidth: 2
    },

    button_text: {
        color: "white",
    },

    input: {
        marginTop: "5%",
        marginBottom: "8%",
        marginLeft: "Auto",
        marginRight: "auto",

    }

})

export default style;