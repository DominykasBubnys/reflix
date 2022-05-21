import React from 'react'
import { ScrollView, View, Text, Modal } from 'react-native';
import Styles from "./Styles";
import { Button } from 'renative';

const CustomModal = (props) => {
    
    
    
    
    return (
        <Modal 
            animationType="fade"
            transparent={true}
        >
            <View style={Styles.container}>
                {props.children}
                <Button style={{backgroundColor: "White", opacity: 0.6}} textStyle={{color:"white"}} onPress={props.onPress} title="Close modal" />
            </View>
        </Modal>
    )
}

export default CustomModal