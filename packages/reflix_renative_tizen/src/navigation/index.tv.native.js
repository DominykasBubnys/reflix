import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AuthScreen from '../screens/AuthScreen';
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";
import PlayerScreen from '../screens/PlayerScreen/index.tv.native';
const ModalStack = createStackNavigator();

const MyTheme = {
    dark: false,
    colors: {
      primary: 'red',
      card: 'rgba(78, 78, 78, 0.9)',
      text: 'rgb(28, 28, 30)',
      backgroundColor: "black",
      background: "black",
      notification: 'rgb(255, 69, 58)',
      color: "red",
    },    
};

const App = (props) => (
    <NavigationContainer theme={MyTheme}>
        <ModalStack.Navigator
            initialRouteName='Home'
            detachInactiveScreens={true}
            screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
            unmountInactiveScreen: true,
            detachPreviousScreen: true,
            }}
        >
            <ModalStack.Screen name='Home' component={HomeScreen} />
            <ModalStack.Screen name='Browse' component={BrowseScreen} />
            <ModalStack.Screen name='Auth' component={AuthScreen} />
            <ModalStack.Screen name='Details' component={DetailsScreen} />
            <ModalStack.Screen name='Profile' component={ProfileScreen} />
            <ModalStack.Screen name='Player' component={PlayerScreen} />

        </ModalStack.Navigator>
    </NavigationContainer>   
);

export default App;
