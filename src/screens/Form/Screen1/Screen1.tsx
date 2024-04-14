import { View, Text, TextInput } from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../../@types/navigation';
import { useAppDispatch, useAppSelector } from '../../../redux/app/store';
import { setHeader } from '../../../redux/reducer/formSlice';
import { setCityState } from '../../../redux/reducer/authSlice';
import { styles } from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const Screen1 = () => {
    const [propertyName, setPropertyName] = useState<string>('');
    const [addressLine1, setAddressLine1] = useState<string>('');
    const [nearByPlace, setNearByPlace] = useState<string>('');
    const [pincode, setPincode] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [isRecoredPrice, setIsRecordedPrice] = useState<boolean>(true);
    const [propertyPrice, setPropertyPrice] = useState<string>('');
    const [onRecordAmount, setOnRecordAmount] = useState<string>('');
    const [offRecordAmount, setOffRecordAmount] = useState<string>('');
    const [attachFiles, setAttachFiles] = useState<any[]>([]);
    const cityG = useAppSelector(state => state.auth?.city);
    const stateG = useAppSelector(state => state.auth?.states);
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectState, setSelectState] = useState<string>('');
    const [isCitySelected, setIsCitySelected] = useState<boolean>(
      cityG ? true : false,
    );
    const [isSubmitedd, setisSubmitedd] = useState<boolean>(false);
    const navigation = useNavigation<navigationProp>();
    useEffect(() => {
      setSelectedCity(cityG ? cityG : '');
      setSelectState(stateG ? stateG : '');
      setIsCitySelected(cityG ? true : false);
    }, [cityG]);
    useEffect(() => {
      dispatch(setCityState({city: '', states: ''}));
    }, []);
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        dispatch(setHeader(1));
      });
      return unsubscribe;
    }, [navigation]);
    const propertyNameRef = useRef<TextInput>(null);
    const addressLine1Ref = useRef<TextInput>(null);
    const nearByPlaceRef = useRef<TextInput>(null);
    const pincodeRef = useRef<TextInput>(null);
    const noteRef = useRef<TextInput>(null);
    const propertyPriceRef = useRef<TextInput>(null);
    const onRecordRef = useRef<TextInput>(null);
    const offRecoredRef = useRef<TextInput>(null);
    const onCancleButtonPress = () => {
      navigation.goBack();
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          dispatch(setHeader(1));
        });
        return unsubscribe;
      }, [navigation]);
  return (
    <View style={styles.container}>

    </View>
  )
}

export default memo(Screen1)