import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Router, navigate } from '@reach/router';

import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AuthScreen from '../screens/AuthScreen';
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";
import PlayerScreen from '../screens/PlayerScreen';
import Header from '../components/header';

const App = () => {


    useEffect(() => {
        // Required for tizen
        if (window.focus) window.focus();
    }, []);

    return (
        <View>
            <Header focusKey="menu" navigate={navigate}/>

            <View>
                <Router>
                    <HomeScreen path="Home" />
                    <BrowseScreen path="Browse" />
                    <AuthScreen path="Auth" />
                    <ProfileScreen path="Profile" />
                    <DetailsScreen path="Details" />
                    <PlayerScreen path="Player" />
                </Router>
            </View>
        </View>
    );
};

export default App;
