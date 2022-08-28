import asyncHandler from 'express-async-handler';
import Transaction from '../models/transactionModel.js';
import User from '../models/userModel.js';

// @desc    payment
// @route   PUT /bankapi/payment/
// @access  Private
const payMoney = asyncHandler(async (req, res) => {
  const { email, account_number, amount, receiver_account_number } = req.body;

  const user = await User.findOne({ account_number });

  if (user) {
    user.balance = user.balance - amount;
    const receiver = await User.findOne({ receiver_account_number });
    receiver.balance = receiver.balance + amount;
    const transaction = new Transaction({
      sender: user._id,
      receiver: receiver._id,
      transactionAmount: amount,
    });
    const createdTransaction = await transaction.save();

    const updatedUser = await user.save();
    const updatedReceiver = await receiver.save();

    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;

    res.json({
      id: createdTransaction._id,
      status: 'COMPLETED',
      update_time: dateTime,
      email: email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getTransactions = asyncHandler(async (req, res) => {
  const transaction = await Transaction.find({});

  res.json(transaction);
});

export { payMoney, getTransactions };