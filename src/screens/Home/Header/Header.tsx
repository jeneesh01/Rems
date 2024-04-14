import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../../util/constant/colors';
import {images} from '../../../util/constant/images';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import { DrawerParamList } from '../../../navigation/Drawer/Drawer';
type DrawerPRops = DrawerNavigationProp<DrawerParamList>;
const Header = () => {
  const navigation = useNavigation<DrawerPRops>();
  const onDrawerIconPress = () => {
    navigation.openDrawer();
  };
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
        }}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={onDrawerIconPress}>
        <Image
          source={images.DrawerIcon}
          tintColor={colors.white}
          style={{height: 24, width: 24}}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          marginHorizontal: 15,
        }}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Image
          source={images.Notification}
          tintColor={colors.white}
          style={{height: 22, width: 22}}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default memo(Header);
