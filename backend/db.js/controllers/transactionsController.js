const db = require('../db');

// Добавление новой транзакции
exports.createTransaction = (req, res) => {
  const { dateTime, author, sum, category, comment } = req.body;
  const query = `INSERT INTO transactions (dateTime, author, sum, category, comment)
                 VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [dateTime, author, sum, category, comment], (err, result) => {
    if (err) {
      return res.status(500).send('Error saving transaction');
    }
    res.status(200).send('Transaction saved');
  });
};