import axios, {CancelToken} from 'axios';
import {instanceWithAuth, instanceWithoutAuth} from '../util/axiosHandler';

// const getDashBoard = async (page: string) => {
//   return instanceWithoutAuth
//     .get(`api/v1/dashboard?page=${page}`)
//     .then(result => {
//       return result.data;
//     })
//     .catch(err => {
//       console.log('Error in dashboard data', err);
//       throw err;
//     });
// };
const getProperties = async () => {
  return instanceWithoutAuth
    .get(`property`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error in dashboard data', err);
      throw err;
    });
};
const getProperty = async (id:string) => {
  return instanceWithoutAuth
    .get(`property/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error in dashboard data', err);
    });
};
const addProperty = async (body:any) => {
  try {
    console.log("Body", body);
    const result = await instanceWithoutAuth.post(`/api/property`, body);
    return result.data;
  } catch (err) {
    if (err.response && err.response.status === 422) {
      console.log('Validation error:', err.response.data);
      // You can handle validation errors here, such as displaying them to the user
    } else {
      console.log('Error in add data', err);
      // Handle other types of errors, such as network issues or server errors
    }
    // Optionally rethrow the error for the caller to handle
    throw err;
  }
};

const modifyProperty = async (body: any,id:string) => {
  return instanceWithAuth
    .post(`property/${id}`, body)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error ', err);
    });
};

const deleteProperty = async (id:string) => {
  return instanceWithAuth
    .delete(`property/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error ', err);
    });
};

export default {
    getProperties,
    modifyProperty,
    getProperty,
    deleteProperty,
    addProperty,
};
