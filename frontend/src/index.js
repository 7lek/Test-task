import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Импорт стилей (если есть)
import App from './App';  // Импорт основного компонента

// Рендеринг корневого компонента в элемент с id "root", который находится в index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
