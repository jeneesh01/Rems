import { StackNavigationProp } from "@react-navigation/stack";

export type navigationProp = StackNavigationProp<MainStackParamList>;

export type MainStackParamList={
    Auth:AuthStackParamList;
    Login:undefined;
        Register:undefined;
        ForgotPassword:undefined;
        Drawer:undefined;
        CitySelection:undefined;
        Completed:undefined;
        Form:undefined
    }
    

    export type AuthStackParamList={
        Login:undefined;
        Register:undefined;
        ForgotPassword:undefined;
    }