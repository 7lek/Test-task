import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  // Локальные состояния для полей формы
  const [dateTime, setDateTime] = useState('');
  const [author, setAuthor] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('Food');
  const [comment, setComment] = useState('');

  // Обработчик отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Отправка данных на backend
      await axios.post('http://localhost:3000/transactions', {
        dateTime,
        author,
        sum,
        category,
        comment
      });

      alert('Транзакция успешно добавлена!');
      // Очистка формы после успешного добавления
      setDateTime('');
      setAuthor('');
      setSum('');
      setCategory('Food');
      setComment('');

    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      alert('Ошибка при добавлении транзакции');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Дата и время:</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Автор:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Сумма:</label>
        <input
          type="number"
          step="0.01"
          value={sum}
          onChange={(e) => setSum(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Категория:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Еда</option>
          <option value="Transport">Транспорт</option>
          <option value="Entertainment">Развлечения</option>
        </select>
      </div>

      <div>
        <label>Комментарий:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button type="submit">Добавить транзакцию</button>
    </form>
  );
};

export default ExpenseForm;