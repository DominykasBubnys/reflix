import { Text, Pressable, Text, StyleSheet } from 'react-native';
import { ButtonStyles } from '../../styles/FormElementsStyles';
import FocusableHighlight from "../../focusable/FocusableHighlight"
import { navigate } from '../../navigation/navigation';
import React from "react"
const Button = (props) => {

  const { onPress, title, disabled } = props;
  return (
    // <Pressable style={[ButtonStyles.button, disabled? ButtonStyles.disabled : null, props.style]} onPress={onPress}>
    //   <Text style={ButtonStyles.text}>{title}</Text>
    // </Pressable>
    <FocusableHighlight>

    </FocusableHighlight>
  );
}

export default Button;
