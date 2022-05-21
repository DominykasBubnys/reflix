import { Alert, Keyboard, Pressable, Text, Platform, TextInput, View } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Input from "../components/formElements/Input"
import Button from "../components/formElements/Button"
import Styles from '../styles/AuthenticateStyles';
import LoadingSpinner from "../components/loadingSpinner";
import { useAuth } from '../components/context/UserContext';
import FocusableHighlight from '../focusable/FocusableHighlight';
import FocusableButton from '../focusable/FocusableButton';
import TvStyles from "../styles/TvLinksStyles";
import { InputStyles } from '../styles/FormElementsStyles';



export const AuthenticateScreen = ({navigation}) => {

  const Auth = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [nameValue, setNameValue] = useState()
  const [emailValue, setEmailValue] = useState()
  const [passwordValue, setPassswordValue] = useState()


  useEffect(() => {
    if(isLoginMode){
      if(emailValue && passwordValue){
        setDisabledBtn(false)
      }
      else setDisabledBtn(true) 
    }

    if(!isLoginMode){
      if(nameValue && emailValue && passwordValue){
        setDisabledBtn(false)
      }
      else setDisabledBtn(true) 
    }

  }, [nameValue, emailValue, passwordValue])

  const keybordCloseHandler = () => {
    Keyboard.dismiss();
  }


  const changeFormModeHandler = () => setIsLoginMode(!isLoginMode);

  const nameValueChangeHandler = (event) => setNameValue(event)

  const emailValueChangeHandler = (event) => setEmailValue(event)

  const passwordValueChangeHandler = (event) => setPassswordValue(event)



  const submitHandler = async() => {


    if(isLoginMode ){ //&& emailValue && passwordValue){
      setIsLoading(true);

      try {
        const loginReq = await Auth.login(emailValue,passwordValue);
        setIsLoading(false);      
        Keyboard.dismiss(); 

        setTimeout(() => {
          navigation.navigate("Home")
        }, 0);

      } catch (error) {
        Alert.alert(error.message || "Failed to log you in");
        setIsLoading(false);      
      }
    }else if(!isLoginMode) {

      if(nameValue && emailValue && passwordValue){
        setIsLoading(true);

        try {
        const signupReq = await Auth.signup(nameValue,emailValue,passwordValue)
        setIsLoading(false);   
        
        Keyboard.dismiss(); 

        setTimeout(() => {
          navigation.navigate("Home")
        }, 0);
        

        } catch (error) {
          Alert.alert(error.message || "Failed to sign you in");
          setIsLoading(false);      
        }
      }

      
    }


  }


  return (
    <>
      {isLoading && <LoadingSpinner />}

      {  Platform.isTV && !isLoading ? 

        <View style={Styles.tvContainer}>
          {!isLoading && 
            <View>

              <Text style={Styles.header}>{isLoginMode ? "Login" : "Join us now!"}</Text>

              { !isLoginMode &&
                <View style={InputStyles.container_tv}>  
                  <FocusableHighlight underlayColor={TvStyles.buttonFocusedColor}>
                    <TextInput
                      style={InputStyles.input}
                      onChangeText={nameValueChangeHandler}
                      nativeID={'_name'}
                      placeholder={'Enter name'}
                      placeholderTextColor={'gray'}
                    />
                  </FocusableHighlight>
                </View>
              }

              <View style={InputStyles.container_tv}>  
                <FocusableHighlight underlayColor={TvStyles.buttonFocusedColor}>
                  <TextInput
                    ref={emailRef}
                    style={InputStyles.input}
                    onChangeText={emailValueChangeHandler}
                    nativeID={'_email'}
                    placeholder={'Enter email'}
                    placeholderTextColor={'gray'}
                  />
                </FocusableHighlight>
              </View>


              <View style={InputStyles.container_tv}>  
                <FocusableHighlight underlayColor={TvStyles.buttonFocusedColor}>
                  <TextInput
                    style={InputStyles.input}
                    onChangeText={passwordValueChangeHandler}
                    nativeID={'_password'}
                    placeholder={'Enter password'}
                    placeholderTextColor={'gray'}
                  />
                </FocusableHighlight>
              </View>

              <FocusableButton
                nativeID={'submit_button'}
                onPress={submitHandler}
                title={isLoginMode ? "Login" : "SignUp"}
                color={"rgba(51, 77, 58, 0.9)"}
                style={{width: "30%", borderRadius: 20, overflow: "hidden", marginLeft: "auto", marginRight: "auto", margin:20}}
              />

              <FocusableButton
                nativeID={'form_button'}
                onPress={changeFormModeHandler}
                title={isLoginMode ? "Do not have account?" : "Already a member?"}
                color={TvStyles.backgroundColor}
                style={{width: "30%", borderRadius: 20, overflow: "hidden", marginLeft: "auto", marginRight: "auto"}}
              />

            
            </View>
          }
        </View>
      
        :
        
        <Pressable style={Styles.container} onPress={keybordCloseHandler}>
          {!isLoading && <View>
            <Text style={Styles.header}>{isLoginMode ? "Login" : "Join us now!"}</Text>
            
            {isLoginMode ? null : <Input value={nameValue} onChange={nameValueChangeHandler} placeholder="Enter name" />}
            <Input value={emailValue} onChange={emailValueChangeHandler} placeholder="Enter email" />
            <Input value={passwordValue} onChange={passwordValueChangeHandler} secured={true} placeholder="Enter password" />
            <Button disabled={disabledBtn} onPress={submitHandler} title={isLoginMode ? "Login" : "SignUp"}/>
            <Pressable onPress={changeFormModeHandler}>
              <Text style={Styles.text}>{isLoginMode ? "Do not have account?" : "Already a member?"}</Text>
            </Pressable>
            
          </View>}

        </Pressable>
      }
    
    </>
  )
  
  
};

export default AuthenticateScreen;


