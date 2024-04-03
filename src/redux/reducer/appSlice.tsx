import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from '../app/store';
export interface IAuthSlice {
  token: null;
}

const initialState: IAuthSlice = {
  token: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   
  },
});

export const {} =
  appSlice.actions;

export default appSlice.reducer;
