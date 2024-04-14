import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {memo, useState} from 'react';
import {styles} from './styles';
import {images} from '../../util/constant/images';
import {colors} from '../../util/constant/colors';
import SemiBoldText from '../Text/SemiBoldText';
import {data} from './data';
import {useNavigation} from '@react-navigation/native';
import {navigationProp} from '../../@types/navigation';
// 350
const Body = () => {
  const [isSelected, setIsSelected] = useState<number>(1);
  const navigation = useNavigation<navigationProp>();
  const onDrawerScreenPress = (id: number) => {
    // if (id == isSelected) return;

    // // setIsSelected(id);
    // if (id == 1) {
    //   navigation.reset({
    //     index: 0,
    //     routes: [{name: 'Drawer'}],
    //   });
    // } else if (id == 2) {
    //   navigation.navigate('Language', {
    //     isLogin: true,
    //   });
    // } else if (id == 3) {
    //   navigation.navigate('Reminder');
    // } else if (id == 4) {
    //   navigation.navigate('History');
    // } else if (id == 5) {
    //   navigation.navigate('Persons');
    // } else if (id == 6) {
    //   navigation.navigate('Settings');
    // } else if (id == 7) {
    //   // About
    // }
  };

  return (
    <View style={styles.bodyContainer}>
      {data.map((item: any, index: number) => (
        <TouchableOpacity
          key={item.id}
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            padding: 10,
            alignItems:'center'
          }}
          onPress={() => onDrawerScreenPress(item.id)}>
          <View
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.image}
              style={{
                tintColor:
                  isSelected == item.id ? colors.primary : colors.black,
                height: item.height,
                width: item.width,
              }}
            />
          </View>

          <SemiBoldText
            style={{
              color: isSelected == item.id ? colors.primary : colors.black,
              marginLeft: 25,
              fontSize:14
            }}>
            {item.name}
          </SemiBoldText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(Body);
