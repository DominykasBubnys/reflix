import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { View } from 'react-native';
import HomeScreen from "../../screens/HomeScreen";
import BrowseScreen from "../../screens/BrowseScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import PlayerScreen from "../../screens/PlayerScreen";
import ProfileScreen from "../../screens/ProfileScreen";

import { ROUTES } from '../../config/config';

const pages = {};
pages[ROUTES.HOME] = HomeScreen;
pages[ROUTES.BROWSE] = BrowseScreen;
pages[ROUTES.DETAILS] = DetailsScreen;
pages[ROUTES.PLAYER] = PlayerScreen;
pages[ROUTES.PROFILE] = ProfileScreen;


const App = () => {
    const router = useRouter();
    useEffect(() => {
    }, [router.asPath]);
    const Page = pages[router.query?.slug] || View;

    return (
        <Page router={router} />
    );
};

export default App;
