import { ImagePickerResponse } from "react-native-image-picker";

export interface IPropertyDetail {
  property_images: ImagePickerResponse;
  property_name:string;
  property_type:string;
  address:string;
  city:string;
  state:string;
  country?:string;
  zip:string;
  price:string;
  sqft:string;
}
export interface Asset {
  base64?: string;
  uri?: string;
  width?: number;
  height?: number;
  originalPath?: string;
  fileSize?: number;
  type?: string;
  fileName?: string;
  duration?: number;
  bitrate?: number;
  timestamp?: string;
  id?: string;
}