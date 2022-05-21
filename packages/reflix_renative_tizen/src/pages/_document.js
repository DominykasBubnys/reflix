import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { CONFIG } from '../config/config';

class MyDocument extends Document {
    render() {
        return (
            <Html style={{backgroundColor: "black"}} lang="en">
                <Head>
                    <meta
                        name="description"
                        content={CONFIG.welcomeMessage}
                    />

                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
