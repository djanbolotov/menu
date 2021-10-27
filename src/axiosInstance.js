import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://tasks-2caf3.firebaseio.com/',
});

export default axiosInstance;