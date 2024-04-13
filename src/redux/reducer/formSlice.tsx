import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
  IPropertyDetail,

} from '../../@types/form';
interface IFormSlice {
  propertyDetail: IPropertyDetail;
  header: number;
  bottomSheetOpen: boolean;
}

const initialState: IFormSlice = {
  propertyDetail: {
    property_images:[],
    property_name:'',
    property_type:'',
    address:'',
    city:'',
    state:'',
    country:'india',
    zip:'',
    price:'',
    sqft:'',

  },
 
  header: 1,
  bottomSheetOpen: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPropertyData: (state, action: PayloadAction<IPropertyDetail>) => {
      state.propertyDetail = action.payload;
      console.log('action pauload', action.payload);
    },
   
    setHeader: (state, action: PayloadAction<number>) => {
      state.header = action.payload;
    },
    setBottomSheetOpen: (state, action: PayloadAction<boolean>) => {
      state.bottomSheetOpen = action.payload;
    },
  },
});

export const {
  setPropertyData,
  setHeader,
  setBottomSheetOpen,
} = formSlice.actions;

export default formSlice.reducer;
