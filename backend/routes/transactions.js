const express = require('express');
const router = express.Router();
const { createTransaction } = require('../controllers/transactionsController');

router.post('/transactions', createTransaction);

module.exports = router;