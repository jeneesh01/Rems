import React, { memo, useEffect } from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import AuthStack, { AuthStackParamList } from '../AuthStack/AuthStack';

export type MainStackParamList={
Auth:AuthStackParamList;
}

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Auth' component={AuthStack} />

    </Stack.Navigator>
  )
}

export default memo(MainStack)