import React from 'react'
import { View } from 'react-native'
import Styles from './Styles/index.tv.native'
import { Button } from 'renative'

const CustomButton = (props) => {

    const inputBtn = props.type === "input-btn";

    return (
        <View style={inputBtn ? null : {flex: 1}}>
            <Button 
                textStyle={{color: "white"}} 
                style={Styles.button || props.style} 
                title={props.title || "Default button"} 
                onPress={props.onPress || null}
            />
        </View>
    )
}

export default CustomButton