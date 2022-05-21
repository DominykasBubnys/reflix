import React, {useEffect} from 'react';
import { View } from 'react-native';
import Styles from './header-styles';
import { useAuth } from '../context/UserContext';
import { ROUTES } from '../../config/config';
import { initNavigation, withFocusable } from '@noriginmedia/react-spatial-navigation';
import { useNavigate, isFactorTv, isWebBased } from 'renative';
import CustomButton from "../formElements/Button";

const hasWebFocusableUI = isWebBased && isFactorTv;

if (hasWebFocusableUI) {
    initNavigation({
        debug: false,
        visualDebug: false,
        nativeMode: false
    });
}



const Header = (props) => {



    const { setFocus } = props;
    const navigate = useNavigate(props);

    if (hasWebFocusableUI) {

        useEffect(() => {
            setFocus();
        }, []);
    }

    const Auth = useAuth();


    const onLogoutHandler = () => {
      Auth.logout();
      if(navigate)
        navigate(ROUTES.HOME, '/[slug]');
    }
  


    return (
        <>
            <View style={Styles.container}>
                

                <CustomButton
                    textStyles={Styles.text}
                    title="Home"
                    onPress={() => navigate(ROUTES.HOME, '/')}
                    onEnterPress={() => navigate(ROUTES.HOME, '/')}
                />

                {

                    Auth.currentUser ? 

                    <>
                        <CustomButton
                            textStyles={Styles.text}
                            title="Profile"
                            onPress={() => navigate(ROUTES.PROFILE, '/[slug]')}
                            onEnterPress={() => navigate(ROUTES.PROFILE, '/[slug]')}
                        />

                        <CustomButton
                            textStyles={Styles.text}
                            title="Logout"
                            onPress={() => onLogoutHandler()}
                            onEnterPress={() => onLogoutHandler()}
                        />



                    </>

                    :

                    <>
                        <CustomButton
                            textStyles={Styles.text}
                            title="Browse"
                            onPress={() => {
                                navigate(ROUTES.BROWSE, '/[slug]');
                            }}
                            onEnterPress={() => {
                                navigate(ROUTES.BROWSE, '/[slug]');
                            }}
                        />

                        <CustomButton
                            textStyles={Styles.text}
                            title="Login"
                            onPress={() => {
                                navigate(ROUTES.AUTH, '/[slug]');
                            }}
                            onEnterPress={() => {
                                navigate(ROUTES.AUTH, '/[slug]');
                            }}
                        />
                    </>
                }

                
            </View>    
        </>
    )

}

export default (hasWebFocusableUI ? withFocusable()(Header) : Header);
