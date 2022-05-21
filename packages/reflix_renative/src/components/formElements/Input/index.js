import React, { useRef } from 'react'
import { View, TextInput, Text, Alert } from 'react-native'
import Style from "./Styles/index";

const Input = (props) => {

  const defaultRef = useRef(null);

  const textChangeHandler = (text) => {
      props.onChange ? props.onChange(text): Alert.alert("OnChange event is missing.. Make sure you pass 'onChange' though props");
  }


  return (
      <View style={Style.container}>

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