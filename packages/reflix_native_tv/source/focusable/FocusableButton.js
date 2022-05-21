import React, {useState, forwardRef} from 'react';
import {Button, View} from 'react-native';

const FocusableButton = forwardRef((props, ref) => {
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  let color = props.color;
  if (focused && props.colorFocused) {
    color = props.colorFocused;
  } else if (pressed && props.colorPressed) {
    color = props.colorPressed;
  }

  return (
    <View style={props.style}>
      <Button
        {...props}
        ref={ref}
        onPress={(event) => {
          if (event.eventKeyAction !== undefined && event.eventKeyAction === 0) {
            setPressed(parseInt(event.eventKeyAction) === 0);
            if (props.onPress) {
              props.onPress(event);
            }
          }
        }}
        color={color}
      />
    </View>
    
  );
});

export default FocusableButton;
