import React, { useRef, useState } from 'react'
import { View, TextInput, Text, Alert } from 'react-native'
import Style from "./Styles/index.tv.native";
import CustomButton from '../Button/index.tv.native';

const Input = (props) => {

    const [onFocus, setOnFocus] = useState(false);
    const defaultRef = useRef(null);

    const enableInput = () => {
        if(defaultRef.current){
            defaultRef.current.focus();
            setOnFocus(true)
        }
    }

    const textChangeHandler = (text) => {
        props.onChange ? props.onChange(text): Alert.alert("OnChange event is missing.. Make sure you pass 'onChange' though props");
    }


    return (
        <View style={Style.container}>

            <CustomButton onPress={enableInput} type={"input-btn"} title="Type.." />

            <TextInput
                ref={props._ref || defaultRef}
                autoFocus={props.onFocus}
                style={Style.input}
                onChangeText={textChangeHandler}
                nativeID={props.nativeID || Math.random().toString()}
                placeholder={ props.placeholder || 'Enter text'}
                placeholderTextColor={'gray'}
            />


        </View>
    )
}

export default Input