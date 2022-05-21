import React from 'react'
import { ScrollView, View, Text, Modal } from 'react-native';
import Styles from "./Styles";
import CustomButton from "../formElements/Button";

const CustomModal = (props) => {
    
    
    
    
    return (
        <Modal 
            animationType="fade"
            transparent={true}
        >
            <View style={Styles.container}>
                {props.children}
                <CustomButton textStyle={Styles.text} onPress={props.onPress} title="Close modal" />
            </View>
        </Modal>
    )
}

export default CustomModal