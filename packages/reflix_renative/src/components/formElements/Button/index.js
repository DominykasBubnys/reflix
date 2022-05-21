import { Text, Pressable, View } from 'react-native';
import Styles from '../Button/Styles/index';
import React from "react"
const Button = (props) => {

  const { onPress, title, disabled } = props;


  return (
    <Pressable style={[Styles.button, disabled? Styles.disabled : null, props.style]} onPress={onPress}>
      <Text style={Styles.text}>{title}</Text>
    </Pressable>
  );
}

export default Button;
