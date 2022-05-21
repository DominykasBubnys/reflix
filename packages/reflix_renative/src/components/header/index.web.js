import React from 'react';
import { Button, View } from 'react-native';
import Styles from './header-styles';
import { useAuth } from '../context/UserContext';
import { ROUTES } from '../../config/config';
// import { Button } from 'renative';
import { useRouter } from 'next/router';
import CustomButton from '../formElements/Button/index.web';

const Header = (props) => {

    const Auth = useAuth();
    const router = useRouter();

    const navigation = Auth.navigation;

    const onLogoutHandler = () => {
      Auth.logout();
      if(navigation)
        router.push(ROUTES.HOME, '/[slug]');
    }
  


    return (
        <>
            <View style={Styles.container}>

                <CustomButton 
                    title='Home'
                    textStyle={Styles.text}
                    onPress={() => {
                        router.push(ROUTES.HOME)
                    }}  
                />


                {

                    Auth.currentUser ? 

                    <>
                        <CustomButton
                            textStyle={Styles.text}
                            title="Profile"
                            onPress={() => {
                                router.push(ROUTES.PROFILE);
                            }}
                        />

                        <CustomButton
                            textStyle={Styles.text}
                            title="Logout"
                            onPress={() => {
                                onLogoutHandler();
                            }}
                        />



                    </>

                    :

                    <>
                        <CustomButton
                            textStyle={Styles.text}
                            title="Browse"
                            onPress={() => {
                                router.push(ROUTES.BROWSE);
                            }}
                        />

                        <CustomButton
                            textStyle={Styles.text}
                            title="Login"
                            onPress={() => {
                                router.push(ROUTES.AUTH);
                            }}
                        />
                    </>
                }

                
            </View>    
        </>
    )

}

export default Header;