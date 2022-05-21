import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
    },

    header: {
        color: "white",
        textAlign: "center",
        marginTop: "45%",
        fontSize: 34,
        marginBottom: "20%",
    },

    header_forTVS: {
        color: "white",
        textAlign: "center",
        marginTop: "8%",
        fontSize: 34,
        marginBottom: "10%",
    },

    tv_menu_btn: {
        display: "flex",
        margin: 20,
        padding: 10,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgba(51, 77, 58, 0.5)",
    },

    tv_btn_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

})

export default Styles;