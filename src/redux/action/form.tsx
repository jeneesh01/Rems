import { IPropertyDetail } from "../../@types/form";
import { AppDispatch, RootState } from "../app/store";
import { setPropertyData } from "../reducer/formSlice";






export const addPropertyData =
  <K extends keyof IPropertyDetail>(
    key: K,
    data: IPropertyDetail[K],
  ) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const transactionDetail = {...state.form.propertyDetail};
    const transaction = {...transactionDetail, [key]: data};
    dispatch(setPropertyData(transaction));
  };
export const emptyProperty=()=>async(dispatch:AppDispatch,getState:()=>RootState)=>{
   const  propertyDetail= {
        property_images:{},
        property_name:'',
        property_type:'',
        address:'',
        city:'',
        state:'',
        country:'india',
        zip:'',
        price:'',
        sqft:'',
      }
    dispatch(setPropertyData(propertyDetail));
     
}