import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import LinearGradient from 'react-native-linear-gradient'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SemiBoldText from '../../components/Text/SemiBoldText'
import RegularText from '../../components/Text/RegularText'
import BoldText from '../../components/Text/BoldText'
import MediumText from '../../components/Text/MediumText'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'
import { CURRENT_HEIGHT } from '../../util/constant/responsive'

const Login = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword]= useState<string>('');
  const [showPass,setShowPass] = useState<boolean>(false);
  const navigation = useNavigation<navigationProp>();
  const onEyePress=()=>{
    setShowPass(!showPass)
  }
  const onfpPress=()=>{
    navigation.navigate('ForgotPassword')

  }
  return (
    <LinearGradient
      colors={[colors.primary7,colors.primary7,colors.DarkBgColor]}
      style={styles.container}>
      <SafeAreaView  style={{backgroundColor:colors.primary7,opacity:0}}/>
        <ScrollView showsVerticalScrollIndicator={false} keyboardDismissMode='interactive' keyboardShouldPersistTaps='handled' contentContainerStyle={{flexGrow:1}}>


      <BoldText style={[styles.headerText,{marginTop:CURRENT_HEIGHT*0.1}]}>Welcome,</BoldText>
      <RegularText style={[styles.headerText,{marginBottom:50,marginTop:-5}]}>Glad to see you!</RegularText>
      <CustomTextInput placeholder='Email Address' value={email} setValue={setEmail} /> 
      <CustomTextInput placeholder='Password' value={password} setValue={setPassword} isPasseword secureTextEntry={showPass} onPress={onEyePress}/> 
      <TouchableOpacity style={{}} hitSlop={{top:10,right:10,bottom:10,left:10}} onPress={onfpPress}>
      <SemiBoldText style={styles.forgotPassword}>Forgot Password</SemiBoldText>
      </TouchableOpacity>
        
      <CustomButton title='Login' viewStyle={{marginTop:30}}/> 
      <View
        style={styles.bottomMainContainer}>
        <View
          style={styles.bottomContainer}>
        <SemiBoldText>Don't have an account?</SemiBoldText>
        <BoldText style={{color:colors.white,marginLeft:5}}>Sign Up Now</BoldText>
        </View>
      </View>

      </ScrollView>
      
    </LinearGradient>

  )
}

export default memo(Login)