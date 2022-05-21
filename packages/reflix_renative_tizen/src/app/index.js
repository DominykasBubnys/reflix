import React from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import { AuthProvider } from '../components/context/UserContext';
import Navigation from '../navigation';
import Header from '../components/header';
import { LogBox } from 'react-native';


const App = () => {
    LogBox.ignoreLogs(['Setting a timer for a long period of time'])


    return <AuthProvider>

        <View style={{flex: 1}}>

            <Navigation />

        </View>

    </AuthProvider>


    
};

export default App;
