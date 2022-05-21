import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useAuth } from '../../components/context/UserContext';
import { ROUTES } from '../../config/config';
import style from "./Styles"
import Input from "../../components/formElements/Input";
import { Button } from 'renative';
import { navigate } from '@reach/router';
import ErrorModal from "../../components/errorModal";

const AuthScreen = (props) => {

    const Auth = useAuth();

    const [isLoginMode, setIsLoginMode] = useState(true);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [error, setError] = useState(null);

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
                    await Auth.login(email,password);
                    console.log("Logged in successfully");
                    setTimeout(() => {
                        navigate(ROUTES.HOME, '/[slug]');
                    }, 0);
            
                } catch (error) {
                    setError(error.message || "Failed to log you in");
                }
            }            
            else setError("Please fill all inputs")

        }

        else if(!isLoginMode){

            if(name && email && password){

                try {
                    const kazkas = await Auth.signup(name, email, password);
                    console.log("Signup successfully: ", kazkas);
                    setTimeout(() => {
                        navigate(ROUTES.HOME, '/[slug]');
                    }, 0);
            
                } catch (error) {
                    setError(error.message || "Failed to log you in");
                }
            }
            else setError("Please fill all inputs")
        }
    }



    return <View style={{flex:1}}>
        
        {   error ? 

            <ErrorModal message={error} onClose={() => setError(null)} />

            : 

            <View>

                {
                    isLoginMode ?
                        <View style={style.input}>
                            <Input placeholder="Enter email" onChange={emailChangeHandler}/>
                            <Input placeholder="Enter password" onChange={passwordChangeHandler}/>
                        </View>
                    :
                        <View style={style.input}>
                            <Input placeholder="Enter name" onChange={nameChangeHandler} />
                            <Input placeholder="Enter email" onChange={emailChangeHandler}/>
                            <Input placeholder="Enter password" onChange={passwordChangeHandler}/>
                        </View>
                }

                <>
                    <Button 
                        textStyle={style.button_text}
                        style={style.form_button} 
                        onEnterPress={SubmitHandler} 
                        title={isLoginMode ? "Login" : "Signup"} 
                    />

                    <Button 
                        textStyle={style.button_text}
                        style={style.form_button} 
                        onEnterPress={changeFormActionHandler} 
                        title={isLoginMode ? "Do not have an account?" : "Already a member?"} 
                    />
                </>

                


            </View>
        }

        
        
    </View>
}

export default AuthScreen;