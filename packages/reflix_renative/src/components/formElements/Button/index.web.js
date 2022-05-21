import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Styles from './Styles'



const CustomButton = (props) => {
    
    const pressedByDefault = () => console.log("No onPress method passed");

    
    
    
    return <View style={props.style || Styles.container}>
        <TouchableOpacity 
            onPress={props.onPress || pressedByDefault} 
        >
            <Text style={props.textStyle || Styles.text}>{props.title || "Click me!"}</Text>
        </TouchableOpacity>
    </View>
}

export default CustomButton