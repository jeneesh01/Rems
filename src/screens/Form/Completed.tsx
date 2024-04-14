import {View, Text} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useAppDispatch} from '../../redux/app/store';
import {setHeader} from '../../redux/reducer/formSlice';
import { colors } from '../../util/constant/colors';
import FormHeader from '../../components/CustomFormHeader/FormHeader';
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../@types/navigation';

const Completed = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<navigationProp>();
  useEffect(() => {
    dispatch(setHeader(3));
    setTimeout(() => {
      navigation.navigate('Drawer')
    }, 2000);
  }, []);
  return (
    <View style={{flex:1,backgroundColor:colors.BackgroundColor}}>
    </View>
  );
};

export default memo(Completed);
