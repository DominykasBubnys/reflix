
import React from 'react'
import { View, Text } from 'react-native'
import Styles from "./FooterStyles"

const Footer = () => {



  return (
      <View className={Styles.footer_container}>
          <Text style={Styles.footer_text}>Created by React Seals! </Text>
      </View>
    
  )
}

export default Footer