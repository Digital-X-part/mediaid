import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace this with your actual backend server URL
  // timeout: 5000, // You can adjust the timeout value as per your requirements
});

export default axiosInstance;