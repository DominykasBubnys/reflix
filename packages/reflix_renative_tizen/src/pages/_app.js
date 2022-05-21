/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import {AuthProvider} from "../components/context/UserContext";


export default function MyApp({ Component, pageProps }) {

    const router = useRouter();
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );

}
