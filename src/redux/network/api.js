export const URL = 'https://balldontlie.io/api';
import store from '../store';
import reactotron from 'reactotron-react-native';
export const buildHeaders = () => {
  let headers = {
    Connection: 'keep-alive',
    'Accept-Encoding': 'gzip, deflate, br',
    Accept: '*/*',
  };
};
const fetchData = async (endpoint, body) => {
  const url = `${URL}${endpoint}`;
  const headers = buildHeaders();
  return fetch(url, {
    method: 'GET',
    headers,
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
  const headers = buildHeaders();
  return fetch(url, {
    method: 'POST',
    headers,
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
