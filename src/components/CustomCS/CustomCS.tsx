import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../@types/navigation';
import { colors } from '../../util/constant/colors';
import { images } from '../../util/constant/images';
import { SCREEN_WIDTH } from '../../util/constant/responsive';
import SemiBoldText from '../Text/SemiBoldText';


type props = {
  isCitySelected: boolean;
  selectState: string;
  selectedCity: string;
};

const CustomCS = ({isCitySelected, selectedCity, selectState}: props) => {
  const navigation = useNavigation<navigationProp>();
  const onSelectCityPress = () => {
    navigation.navigate('CitySelection');
  };

  return (
    <View>
      <TouchableOpacity
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
        onPress={onSelectCityPress}
        style={{
          marginHorizontal: 25,
          marginBottom: isCitySelected ? 30 : 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <SemiBoldText
            style={{color: isCitySelected ? colors.black : colors.black7,fontSize:14}}>
            Select City
          </SemiBoldText>
          <Image
            source={images.Arrow}
            style={{
              tintColor: colors.black,
              height: 13,
              width: 13,
              transform: [{rotate: '180deg'}],
            }}
          />
        </View>
        {isCitySelected && (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <SemiBoldText style={{fontSize:12}}>State</SemiBoldText>
              <SemiBoldText
                numberOfLines={1}
                style={{
                  width: Math.min(SCREEN_WIDTH / 2.7, 180),
                  marginVertical: 5,
                  fontSize:14
                }}>
                {selectState}
              </SemiBoldText>
              <View
                style={{
                  width: Math.min(SCREEN_WIDTH / 2.6, 200),
                  borderBottomWidth: 1,
                }}
              />
            </View>
            <View>
              <SemiBoldText style={{fontSize:12}}>City</SemiBoldText>
              <SemiBoldText
                numberOfLines={1}
                style={{
                  width: Math.min(SCREEN_WIDTH / 2.7, 180),
                  marginVertical: 5,
                  fontSize:14
                }}>
                {selectedCity}
              </SemiBoldText>
              <View
                style={{
                  width: Math.min(SCREEN_WIDTH / 2.6, 200),
                  borderBottomWidth: 1,
                }}
              />
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(CustomCS);
export const styles = StyleSheet.create({});
