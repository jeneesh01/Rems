import React, { memo, useEffect } from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import AuthStack from '../AuthStack/AuthStack';
import { MainStackParamList } from '../../@types/navigation';
import ForgotPassword from '../../screens/ForgotPassword/ForgotPassword';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';


const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default memo(MainStack)