export const URL = 'https://balldontlie.io';
import store from '../store';
import reactotron from 'reactotron-react-native';

export const buildHeaders = () => {
  let headers = {
    'Content-Type': 'application/json',
  };
  return headers;
};
const fetchData = async (endpoint, body, data) => {
  const url = `${URL}${endpoint}`;
  const headers = buildHeaders();
  return fetch(url, {
    method: 'GET',
    headers,
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => {
      reactotron.log('resultapi', res);
      if (res != null) {
        return {networkSuccess: true, data: res.data};
      } else {
        return {networkSuccess: false, ...res};
      }
    })
    .catch(e => ({networkSuccess: false}));
};

export {fetchData};
