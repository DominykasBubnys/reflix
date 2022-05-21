/* eslint-disable react/prop-types */
import { Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'next/router';
import {AuthProvider} from "../components/context/UserContext";
import Header from "../components/header/index.web"
// import Menu from '../components/menu';


export default function MyApp({ Component, pageProps }) {

    const router = useRouter();
    return (
        <AuthProvider>
            <Header />
            <Component {...pageProps} />
        </AuthProvider>
    );

}
