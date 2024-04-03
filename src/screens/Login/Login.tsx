import { View, Text, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'

const Login = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView  style={{backgroundColor:colors.BackgroundColor}}/>

      <Text>Login</Text>
    </View>
  )
}

export default memo(Login)