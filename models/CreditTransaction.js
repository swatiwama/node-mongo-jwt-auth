const mongoose = require('mongoose');

const creditTransactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  delta: { type: Number, required: true }, // + or - credits
  type: { type: String, enum: ['signup','admin-add','purchase','usage','refund'], default: 'usage' },
  note: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CreditTransaction', creditTransactionSchema);
