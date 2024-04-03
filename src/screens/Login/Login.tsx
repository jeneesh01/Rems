import { View, Text, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import LinearGradient from 'react-native-linear-gradient'

const Login = () => {
  return (
    <LinearGradient
      colors={[colors.primary7,colors.primary7,colors.DarkBgColor]}
      style={styles.container}>
      <SafeAreaView  style={{backgroundColor:colors.primary7,opacity:0}}/>
      
    </LinearGradient>

  )
}

export default memo(Login)