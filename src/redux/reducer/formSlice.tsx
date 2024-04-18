import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {IChatData, IPropertyDetail} from '../../@types/form';
interface IFormSlice {
  propertyDetail: IPropertyDetail;
  propertyDetailList: IPropertyDetail[];
  header: number;
  chatData: string;
}

const initialState: IFormSlice = {
  propertyDetail: {
    property_images: [],
    property_name: '',
    property_type: '',
    address: '',
    city: '',
    state: '',
    country: 'india',
    zip: '',
    price: '',
    sqft: '',
  },
  chatData: '',
  propertyDetailList: [
    {
      property_images: [],
      property_name: '',
      property_type: '',
      address: '',
      city: '',
      state: '',
      country: 'india',
      zip: '',
      price: '',
      sqft: '',
    },
  ],

  header: 1,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPropertyData: (state, action: PayloadAction<IPropertyDetail>) => {
      state.propertyDetail = action.payload;
    },
    setPropertyDataList: (state, action: PayloadAction<IPropertyDetail[]>) => {
      state.propertyDetailList = action.payload;
    },

    setHeader: (state, action: PayloadAction<number>) => {
      state.header = action.payload;
    },
    setChatData: (state, action: PayloadAction<string>) => {
      state.chatData = action.payload;
    },
  },
});

export const {setPropertyData, setHeader, setPropertyDataList, setChatData} =
  formSlice.actions;

export default formSlice.reducer;
