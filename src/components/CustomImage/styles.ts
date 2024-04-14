import {StyleSheet} from 'react-native';
import { colors } from '../../util/constant/colors';
import { CURRENT_WIDTH, SCREEN_WIDTH } from '../../util/constant/responsive';
import { fonts } from '../../util/constant/fonts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgred,
    marginTop: 20,
  },
  bodycontainer: {
    height: SCREEN_WIDTH / 2.26,
    width: SCREEN_WIDTH / 2.26,
    marginLeft: 15,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  closecontainer: {
    position: 'absolute',
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    right: 16,
    top: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {height: 3, width: 0},
  },
  modalcontainerstyle: {
    height: 120,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  modaltviewextstyle: {
    margin: 15,
  },
  cancelcontainerstyle: {
    height: 50,
    marginHorizontal: 10,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  midcontainer: {
    width: CURRENT_WIDTH - 20,
    borderWidth: 0.4,
    borderColor: colors.grey,
    margin: 5,
  },

  text: {
    fontFamily: fonts.SemiBold,
    letterSpacing: 0.5,
    fontSize: 14,
    color: colors.black,
  },
  tochableOpacitystyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
