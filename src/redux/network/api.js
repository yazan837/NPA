export const URL = 'https://balldontlie.io/api';
import store from '../store';
import reactotron from 'reactotron-react-native';

const fetchData = async (endpoint, body) => {
  const url = `${URL}${endpoint}`;

  return fetch(url, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(res => {
      if (res != null) {
        return {networkSuccess: true, formData: res};
      } else {
        return {networkSuccess: false, ...res};
      }
    })
    .catch(e => ({networkSuccess: false}));
};

const postData = async (endpoint, body, auth, passwordSetup) => {
  const url = `${URL}${endpoint}`;

  return fetch(url, {
    method: 'POST',

    body: JSON.stringify(body),
  })
    .then(res => processResponse(res, auth, passwordSetup))
    .then(res => {
      return {
        networkSuccess: res.statusCode == 200,
        formData: res.data,
        token: auth ? res.token : '',
      };
    })

    .catch(e => ({networkSuccess: false}));
};

export {fetchData, postData};
