import {View, Text} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useAppDispatch} from '../../redux/app/store';
import {setHeader} from '../../redux/reducer/formSlice';

const Completed = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setHeader(5));
  }, []);
  return (
    <View>
      <Text>Completed</Text>
    </View>
  );
};

export default memo(Completed);
