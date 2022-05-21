import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, Pressable, Keyboard } from 'react-native';
import { useAuth } from '../../components/context/UserContext';
import { ROUTES } from '../../config/config';
import style from "./Styles/index.web"
import { useRouter } from 'next/router';
import Input from "../../components/formElements/Input/index.web";
import CustomButton from "../../components/formElements/Button";

const AuthScreen = (props) => {

    const Auth = useAuth();
    const router = useRouter();
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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
      console.log("Submiting the form");

      if(isLoginMode){

          if(email && password){

            console.log("email: ", email, " | pass: ", password);
              try {
                  const loginReq = await Auth.login(email,password);
                  console.log("Login req: ", loginReq)
                  console.log("Logged in successfully");
      
                  setTimeout(() => {
                      router.push(ROUTES.HOME);
                  }, 0);
          
              } catch (error) {
                  Alert.alert(error.message || "Failed to log you in");
              }
          }

      }
      else if(!isLoginMode){

          if(name && email && password){
              try {
                  const loginReq = await Auth.signup(name, email, password);
                  console.log("Signup successfully");
      
                  setTimeout(() => {
                      router.push(ROUTES.HOME);
                  }, 0);
          
              } catch (error) {
                  Alert.alert(error.message || "Failed to log you in");
                  setIsLoading(false);      
              }
          }

      }

    }

    return <Pressable onPress={() => Keyboard.dismiss()} style={{flex:1}}>
                
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

                <View style={style.controlls_container}>
                    <CustomButton 
                        textStyle={style.button_text}
                        style={style.form_dutton} 
                        onPress={SubmitHandler} 
                        title={isLoginMode ? "Login" : "Signup"} 
                    />

                    <CustomButton 
                        textStyle={style.button_text}
                        style={style.form_dutton} 
                        onPress={changeFormActionHandler} 
                        title={isLoginMode ? "Do not have an account?" : "Already a member?"} 
                    />
                </View>

            </View>

        
        
    </Pressable>
}

export default AuthScreen;