import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, useNavigation } from 'renative';
import { useAuth } from '../../components/context/UserContext';
import { ROUTES } from '../../config/config';
import style from "./Styles/index.tv.native"


const HomeScreen = (props) => {

    const Auth = useAuth(); 

    useEffect(() => {Auth.setUserNavigation(props.navigation)}, []); // making navigation accessible to all components


    return <View style={{flex:1}}>
        
        
        <Text style={style.header}>Reflix</Text>

        <>

            <Button
                style={style.button}
                textStyle={style.coloras}
                title="Browse"
                className={style.coloras}
                onPress={() => {
                    Auth.navigation.navigate(ROUTES.BROWSE, '/[slug]');
                }}
                onEnterPress={() => {
                    Auth.navigation.navigate(ROUTES.BROWSE, '/[slug]');
                }}
            />

            <>
                {   
                    Auth.currentUser ? 

                    <Button
                        style={style.button}
                        textStyle={style.coloras}
                        title="Profile"
                        className={style.coloras}
                        onPress={() => {
                        Auth.navigation.navigate(ROUTES.PROFILE, '/[slug]');
                        }}
                        onEnterPress={() => {
                        Auth.navigation.navigate(ROUTES.PROFILE, '/[slug]');
                        }}
                    />

                    :

                    <Button
                        style={style.button}
                        textStyle={style.coloras}
                        title="Authenticate"
                        className={style.coloras}
                        onPress={() => {
                        Auth.navigation.navigate(ROUTES.AUTH, '/[slug]');
                        }}
                        onEnterPress={() => {
                        Auth.navigation.navigate(ROUTES.AUTH, '/[slug]');
                        }}
                    />
                
                }
            </>
        
        </>
            

    </View>
}

export default HomeScreen;