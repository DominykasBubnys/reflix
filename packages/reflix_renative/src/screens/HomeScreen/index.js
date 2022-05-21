import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, useNavigation } from 'renative';
import { useAuth } from '../../components/context/UserContext';
import { ROUTES } from '../../config/config';
import style from "./Styles/"


const HomeScreen = (props) => {

    const Auth = useAuth(); 

    useEffect(() => {Auth.setUserNavigation(props.navigation)}, []); // making navigation accessible to all components


    return <View style={{flex:1}}>
        
        
        <Text style={style.header}>Reflix</Text>

        <>

            <Button
                style={style.button}
                textStyle={style.color}
                title="Browse"
                className={style.color}
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
                        textStyle={style.color}
                        title="Profile"
                        className={style.color}
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
                        textStyle={style.color}
                        title="Authenticate"
                        className={style.color}
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