import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/formElements/Button/index.web';
import { useAuth } from '../../components/context/UserContext';
import { ROUTES } from '../../config/config';
import { useRouter } from 'next/router';
import style from "./Styles"


const HomeScreen = (props) => {

    const Auth = useAuth(); 
    const router = useRouter();


    return <View style={{flex:1}}>
        
        
        <Text style={style.header}>Reflix</Text>

        <View style={style.controlls}>

            <CustomButton
                style={style.button}
                textStyle={style.color}
                title="Browse"
                className={style.color}
                onPress={() => {
                    // Auth.navigation.navigate(ROUTES.BROWSE, '/[slug]');
                    router.push(ROUTES.BROWSE);
                }}
            />

            <>
                {   
                    Auth.currentUser ? 

                    <CustomButton
                        style={style.button}
                        textStyle={style.color}
                        title="Profile"
                        className={style.color}
                        onPress={() => {
                            // Auth.navigation.navigate(ROUTES.PROFILE, '/[slug]');
                            router.push(ROUTES.PROFILE);
                        }}
                    />

                    :

                    <CustomButton
                        style={style.button}
                        textStyle={style.color}
                        title="Authenticate"
                        className={style.color}
                        onPress={() => {
                            // Auth.navigation.navigate(ROUTES.AUTH, '/[slug]');
                            router.push(ROUTES.AUTH);
                        }}
                    />
                
                }
            </>
        
        </View>
            

    </View>
}

export default HomeScreen;