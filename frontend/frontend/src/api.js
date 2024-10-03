import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createTransaction = (data) => {
  return axios.post(`${API_URL}/transactions`, data);
};