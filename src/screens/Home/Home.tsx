import { View, Text, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import HCustomAdd from '../../components/CustomAdd/HCustomAdd'
import Header from './Header/Header'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'

const Home = () => {
  const navigation = useNavigation<navigationProp>();
  return (
    <View style={styles.container}>
        <SafeAreaView style={{backgroundColor:colors.primary}}/>
        <Header />
        <HCustomAdd viewStyle={{position:'absolute',bottom:80,right:50}} onPress={()=>navigation.navigate('Form')} />
    </View>
  )
}

export default memo(Home)