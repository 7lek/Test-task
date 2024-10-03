import axios from 'axios';

// Базовый URL для запросов на сервер
const API_URL = 'http://localhost:3000'; // Убедись, что это правильный адрес твоего backend

// Функция для добавления новой транзакции
export const addTransaction = async (transactionData) => {
  try {
    const response = await axios.post(`${API_URL}/transactions`, transactionData);
    return response.data; // Возвращаем ответ от сервера
  } catch (error) {
    console.error('Ошибка при добавлении транзакции:', error);
    throw error;
  }
};