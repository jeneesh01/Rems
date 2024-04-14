import { View, Text, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import HCustomAdd from '../../components/CustomAdd/HCustomAdd'
import Header from './Header/Header'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'
import { useAppDispatch } from '../../redux/app/store'
import { emptyProperty } from '../../redux/action/form'

const Home = () => {
  const navigation = useNavigation<navigationProp>();
  const dispatch =useAppDispatch();
  const onAddIconPress=()=>{
    dispatch(emptyProperty())
    navigation.navigate('Form')
  }
  return (
    <View style={styles.container}>
        <SafeAreaView style={{backgroundColor:colors.primary}}/>
        <Header />
        <HCustomAdd viewStyle={{position:'absolute',bottom:50,right:40}} onPress={onAddIconPress} />
    </View>
  )
}

export default memo(Home)