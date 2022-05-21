import React, { useState } from 'react'
import { Text, View } from 'react-native';
import styles from "./error-styles"
import CustomButton from '../formElements/Button';

const Modal = (props) => {

    const {message, onClose} = props;

    return (

        <View style={styles.container}>

            <Text style={styles.text}>
                {message || "This is modal text"}
            </Text>

            <CustomButton
                title="Close modal"
                style={styles.button}
                textStyles={styles.button_text}
                onEnterPress={onClose}
            />

        </View>
    )
}

export default Modal