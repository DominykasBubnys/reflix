import React, {useEffect} from 'react';
import { initNavigation, withFocusable } from '@noriginmedia/react-spatial-navigation';
import { Button, isFactorTv, isWebBased } from 'renative';


const hasWebFocusableUI = isWebBased && isFactorTv;

if (hasWebFocusableUI) {
    initNavigation({
        debug: false,
        visualDebug: false,
        nativeMode: false
    });
}


const CustomButton = (props) => {

    const { setFocus } = props;

    if (hasWebFocusableUI) {
        useEffect(() => {
            setFocus();
        }, []);
    }


    return <Button
      textStyle={props.textStyles || {color: "white"}}
      style={props.style || null}
      title={props.title || "Custom Button"}
      onPress={props.onPress}
      onEnterPress={props.onEnterPress}
    />

}

export default (hasWebFocusableUI ? withFocusable()(CustomButton) : CustomButton);
