import React from 'react';
import { View } from 'react-native';
import Styles from './header-styles';
import { useAuth } from '../context/UserContext';
import { ROUTES } from '../../config/config';
import { Button } from 'renative';

const Header = (props) => {

    const Auth = useAuth();

    const navigation = Auth.navigation;

    const onLogoutHandler = () => {
        Auth.logout();
        navigation.navigate(ROUTES.HOME, '/[slug]');
    }
  


    return (
        <>
            <View style={Styles.container}>
                

                <Button
                    textStyle={Styles.text}
                    title="Home"
                    onPress={() => {
                        navigation.navigate(ROUTES.HOME, '/[slug]');
                    }}
                    onEnterPress={() => {
                        navigation.navigate(ROUTES.HOME, '/[slugs]');
                    }}
                />

                {

                    Auth.currentUser ? 

                    <>
                        <Button
                            textStyle={Styles.text}
                            title="Profile"
                            onPress={() => {
                                navigation.navigate(ROUTES.PROFILE, '/[slug]');
                            }}
                            onEnterPress={() => {
                                navigation.navigate(ROUTES.PROFILE, '/[slug]');
                            }}
                        />

                        <Button
                            textStyle={Styles.text}
                            title="Logout"
                            onPress={() => {
                                onLogoutHandler();
                            }}
                            onEnterPress={() => {
                                onLogoutHandler();
                            }}
                        />



                    </>

                    :

                    <>
                        <Button
                            textStyle={Styles.text}
                            title="Browse"
                            onPress={() => {
                                navigation.navigate(ROUTES.BROWSE, '/[slug]');
                            }}
                            onEnterPress={() => {
                                navigation.navigate(ROUTES.BROWSE, '/[slug]');
                            }}
                        />

                        <Button
                            textStyle={Styles.text}
                            title="Login"
                            onPress={() => {
                                navigation.navigate(ROUTES.AUTH, '/[slug]');
                            }}
                            onEnterPress={() => {
                                navigation.navigate(ROUTES.AUTH, '/[slug]');
                            }}
                        />
                    </>
                }

                
            </View>    
        </>
    )

}

export default Header;