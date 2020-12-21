
import axios from 'axios';
import {LOGIN_DETAILS} from './constant';

const baseUrl = 'https://www.ukeraa.com';

export const addDisplayData = () => async (dispatch) => {
  await axios
    .get(`${baseUrl}/api/app/homeadvertise/all`)
    .then((res) => {
      dispatch({
        type: LOGIN_DETAILS,
        payload: res.data,
      });
    })
    .catch((err) => console.log('err' + err));
};