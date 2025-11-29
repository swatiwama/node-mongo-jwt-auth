// routes/credits.js
const express = require('express');
const router = express.Router();
const creditsController = require('../controllers/creditsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, creditsController.getCredits);
router.post('/add', authMiddleware, creditsController.addCredits); // demo admin add
router.post('/use', authMiddleware, creditsController.useCredit);
router.get('/transactions', authMiddleware, creditsController.getTransactions);

module.exports = router;
