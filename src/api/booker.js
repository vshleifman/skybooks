import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const getToken = async () => {
  console.log({token});  
  return token
}

const instance = axios.create({
  baseURL: 'http://9b1e9e2c.ngrok.io'
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;