import { View, Text } from 'react-native'
import React, { memo, useEffect } from 'react'
import { setHeader } from '../../../redux/reducer/formSlice';
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../../@types/navigation';
import { useAppDispatch } from '../../../redux/app/store';
import { styles } from './styles';

const Screen2 = () => {
    const navigation = useNavigation<navigationProp>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          dispatch(setHeader(1));
        });
        return unsubscribe;
      }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
    </View>
  )
}

export default memo(Screen2)