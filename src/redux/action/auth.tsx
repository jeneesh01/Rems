import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch, RootState} from '../app/store';
import {
  IS_FIRST_TIME,
  IS_LOGIN,
  getStorageData,
} from '../../services/storageHandler/storageHandler';
import { setIsFirstTime, setIsLogin, setRecentSearch } from '../reducer/authSlice';

export const getIsLogin = () => async (dispatch: AppDispatch) => {
  try {
    const isLogin = await getStorageData(IS_LOGIN);
    dispatch(setIsLogin(isLogin));
  } catch (error) {
    console.log('Async Error');
  }
};
export const getIsFirstTime = () => async (dispatch: AppDispatch) => {
  try {
    const isFirstTime = await getStorageData(IS_FIRST_TIME);
    dispatch(setIsFirstTime(isFirstTime));
  } catch (error) {
    console.log('Async Error');
  }
};
export const loadRecentSearchData = () => async (dispatch: AppDispatch) => {
  try {
    const recentSearchJson = await AsyncStorage.getItem('recent_search');
    if (recentSearchJson !== null) {
      const recentSearch: {city: string; state: string}[] =
        JSON.parse(recentSearchJson);
      dispatch(setRecentSearch({recentSearch}));
    }
  } catch (error) {
    console.error('Error loading recent search data:', error);
  }
};
