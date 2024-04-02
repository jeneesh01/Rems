import React, { memo, useEffect } from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import Detail from '../screens/Detail';

export type MainStackParamList={
Detail:undefined;
}

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Detail' component={Detail} />

    </Stack.Navigator>
  )
}

export default memo(MainStack)