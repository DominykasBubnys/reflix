import MainNavigation from "../components/navigation/mainNavigation";
import Footer from "../components/footer";
import { AuthProvider } from "../components/context/AuthContext";
import "../styles/globals.css";
import React from "react";


const MyApp = ({Component, pageProps}) => {
    return <AuthProvider >
        <MainNavigation />
        <Component {...pageProps} />
        <Footer />
    </AuthProvider>
}

export default MyApp;