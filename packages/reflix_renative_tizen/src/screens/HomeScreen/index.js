import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'renative';
import { useAuth } from '../../components/context/UserContext';
import { ROUTES } from '../../config/config';
import style from "./Styles"
import { navigate } from '@reach/router';
import CustomButton from "../../components/formElements/Button";



const HomeScreen = (props) => {

    const Auth = useAuth(); 

    return <View style={{flex:1}}>
        
        <Text style={style.header}>Reflix</Text>

        <>

            <Button
                style={style.button}
                textStyle={style.color}
                title="Browse"
                onPress={() => {
                    navigate(ROUTES.BROWSE, '/[slug]');
                }}
                onEnterPress={() => {
                    navigate(ROUTES.BROWSE, '/[slug]');
                }}
            />

            <>
                {   
                    Auth.currentUser ? 

                    <CustomButton
                        style={style.button}
                        textStyles={style.color}
                        title="Profile"
                        onPress={() => {
                            navigate(ROUTES.PROFILE, '/[slug]');
                        }}
                        onEnterPress={() => {
                            navigate(ROUTES.PROFILE, '/[slug]');
                        }}
                    />

                    :

                    <Button
                        style={style.button}
                        textStyle={style.color}
                        title="Authenticate"
                        onPress={() => {
                            navigate(ROUTES.AUTH, '/[slug]');
                        }}
                        onEnterPress={() => {
                            navigate(ROUTES.AUTH, '/[slug]');
                        }}
                    />
                
                }
            </>
        
        </>
            

    </View>
}

export default HomeScreen;