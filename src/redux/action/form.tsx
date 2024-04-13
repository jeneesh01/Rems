// import {IAttachment, ITransactionDetail} from '../../@types/form';
// import {AppDispatch, RootState} from '../app/store';
// import {setTransactionDetail} from '../reducer/formSlice';
// export const addTransactionDetail =
//   () => async (dispatch: AppDispatch, getState: () => RootState) => {
//     const stateData = getState();
//     const allData = stateData.form.transactionDetail;
//     const tempData = [...allData];
//     const data = {
//       attachment: [],
//       date: '',
//       notes: '',
//       transactionMode: 1,
//       transactionName: '',
//       transactions: [],
//       id: Date.now().toString(),

//     };
//     tempData.push(data);
//     dispatch(setTransactionDetail(tempData));
//   };

// export const setTransactionDetails =
//   (data: ITransactionDetail, index: number) =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     const stateData = getState();
//     const allData = stateData.form.transactionDetail;
//     const tempData = [...allData];
//     tempData[index] = data;
//     dispatch(setTransactionDetail(tempData));
//   };

// export const deleteTransactionDetail =
//   (index: number) =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     const stateData = getState();
//     const allData = stateData.form.transactionDetail;
//     const tempData = [...allData];
//     tempData.splice(index, 1);
//     dispatch(setTransactionDetail(tempData));
//   };

// export const transactionNameChange =
//   (name: string, index: number) =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     const stateData = getState();
//     const allData = stateData.form.transactionDetail;
//     const tempData = [...allData];
//     const updatedData = {...tempData[index], transactionName: name};
//     tempData[index] = updatedData;
//     dispatch(setTransactionDetail(tempData));
//   };

// export const setTransactionData =
//   <K extends keyof ITransactionDetail>(
//     index: number,
//     key: K,
//     data: ITransactionDetail[K],
//   ) =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     const state = getState();
//     const transactionDetail = [...state.form.transactionDetail];
//     const transaction = {...transactionDetail[index], [key]: data};
//     transactionDetail[index] = transaction;
//     dispatch(setTransactionDetail(transactionDetail));
//   };
