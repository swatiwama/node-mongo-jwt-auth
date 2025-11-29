// controllers/creditsController.js
const User = require('../models/User');
const CreditTransaction = require('../models/CreditTransaction');

exports.getCredits = async (req, res) => {
  // req.user
  res.json({ credits: req.user.credits });
};

exports.addCredits = async (req, res) => {
  // admin-like endpoint (for demo purposes we keep it simple)
  const { amount, note } = req.body;
  if (typeof amount !== 'number') return res.status(400).json({ message: 'Amount must be a number' });
  try {
    const user = await User.findById(req.user._id);
    user.credits += amount;
    await user.save();

    await CreditTransaction.create({
      user: user._id,
      delta: amount,
      type: 'admin-add',
      note: note || 'Admin added credits'
    });

    res.json({ credits: user.credits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.useCredit = async (req, res) => {
  // example: consume a credit for an operation
  try {
    const user = await User.findById(req.user._id);
    if (user.credits <= 0) return res.status(400).json({ message: 'Not enough credits' });

    user.credits -= 1;
    await user.save();

    await CreditTransaction.create({
      user: user._id,
      delta: -1,
      type: 'usage',
      note: 'Consumed 1 credit'
    });

    res.json({ credits: user.credits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const txs = await CreditTransaction.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ transactions: txs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
