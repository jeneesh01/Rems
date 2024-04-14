import {RouteProp, useRoute} from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import React, {memo, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import { RootState } from '../../redux/app/store';

type props = {
  index: number;
};
const AddPhoto = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const route = useRoute<RouteProp<Record<string, props>, string>>();
  const index = route.params.index;
  const ontakephotopress = async () => {
    setShowModal(false);
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User canceled camera');
      } else if (response.errorCode) {
        Sentry.captureMessage('Error in Launch Camera ');

        console.error('ImagePicker Error: ', response.errorCode);
      } else {
        if (response && response.assets && response.assets[0]) {
          console.log('Image URI: ', response.assets[0].uri);
          const url = response.assets[0].uri;
        } else {
          console.log('Image URI is not available.');
        }
      }
    });
  };

  const choosefromgalary = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User canceled camera');
      } else if (response.errorCode) {
        Sentry.captureMessage('Error in Launch Image Library ');

        console.error('ImagePicker Error: ', response.errorCode);
      } else {
        if (response && response.assets && response.assets[0]) {
          console.log('Image URI: ', response.assets[0].uri);
          const url = response.assets[0].uri;
        } else {
          console.log('Image URI is not available.');
        }
      }
    });
  };
  return (
      <Modal
        animationOutTiming={1000}
        onRequestClose={() => setShowModal(false)}
        backdropTransitionOutTiming={1000}
        isVisible={showModal}
        backdropOpacity={0.5}
        style={{margin: 0}}>
        <TouchableWithoutFeedback
          style={{flex: 1}}
          onPress={() => setShowModal(false)}>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
            <View style={styles.modalcontainerstyle}>
              <TouchableOpacity
                onPress={() => ontakephotopress()}
                style={styles.tochableOpacitystyle}>
                <View style={styles.modaltviewextstyle}>
                  <Text style={styles.text}>Open Camera</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.midcontainer} />
              <TouchableOpacity
                onPress={() => choosefromgalary()}
                style={styles.tochableOpacitystyle}>
                <View style={styles.modaltviewextstyle}>
                  <Text style={styles.text}>Choose From Gallary</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cancelcontainerstyle}>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={styles.tochableOpacitystyle}>
                <View style={styles.modaltviewextstyle}>
                  <Text style={styles.text}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
  );
};

export default memo(AddPhoto);