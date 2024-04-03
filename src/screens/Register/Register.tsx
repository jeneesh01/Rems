import { View, Text, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'

const Register = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView  style={{backgroundColor:colors.BackgroundColor}}/>

      <Text>Register</Text>
    </View>
  )
}

export default memo(Register)