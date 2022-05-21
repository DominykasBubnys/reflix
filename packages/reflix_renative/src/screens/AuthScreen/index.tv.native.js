import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useAuth } from '../../components/context/UserContext';
import { ROUTES } from '../../config/config';
import style from "./Styles/index.tv.native"
import Input from "../../components/formElements/Input";
import CustomeButton from "../../components/formElements/Button";
import { Button } from 'renative';

const AuthScreen = (props) => {

    const Auth = useAuth();

    const [isLoginMode, setIsLoginMode] = useState(true);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const nameChangeHandler = (curr_value) => {
        setName(curr_value);
    }

    const emailChangeHandler = (curr_value) => {
        setEmail(curr_value);
    }

    const passwordChangeHandler = (curr_value) => {
        setPassword(curr_value);
    }

    const changeFormActionHandler = () => setIsLoginMode(!isLoginMode);

    const SubmitHandler = async() => {


        if(isLoginMode){

            if(email && password){
                try {
                    const loginReq = await Auth.login(email,password);
                    console.log("Logged in successfully");
                    //setIsLoading(false);  
        
                    setTimeout(() => {
                        Auth.navigation.navigate(ROUTES.HOME, '/[slug]');
                    }, 0);
            
                } catch (error) {
                    Alert.alert(error.message || "Failed to log you in");
                    //setIsLoading(false);      
                }
            }

        }
        else if(!isLoginMode){

            if(name && email && password){
                try {
                    const loginReq = await Auth.signup(name, email, password);
                    console.log("Signup successfully");
                    //setIsLoading(false);  
        
                    setTimeout(() => {
                        Auth.navigation.navigate(ROUTES.HOME, '/[slug]');
                    }, 0);
            
                } catch (error) {
                    Alert.alert(error.message || "Failed to log you in");
                    //setIsLoading(false);      
                }
            }

        }


    
    
    }

    return <View style={{flex:1}}>
        
        
        <Text style={style.header}>Authenticate</Text>




        <View>

            {
                isLoginMode ?
                    <>
                        <Input placeholder="Enter email" onChange={emailChangeHandler}/>
                        <Input placeholder="Enter password" onChange={passwordChangeHandler}/>
                    </>
                :
                    <>
                        <Input placeholder="Enter name" onChange={nameChangeHandler} />
                        <Input placeholder="Enter email" onChange={emailChangeHandler}/>
                        <Input placeholder="Enter password" onChange={passwordChangeHandler}/>
                    </>
            }

            <>
                <Button 
                    textStyle={style.button_text}
                    style={style.form_dutton} 
                    onPress={SubmitHandler} 
                    title={isLoginMode ? "Login" : "Signup"} 
                />

                <Button 
                    textStyle={style.button_text}
                    style={style.form_dutton} 
                    onPress={changeFormActionHandler} 
                    title={isLoginMode ? "Do not have an account?" : "Already a member?"} 
                />
            </>

            


        </View>

        
        
    </View>
}

export default AuthScreen;