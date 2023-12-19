const userModel = require('../models/userModel');

const addUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const checkPaymentStatus = async (req, res) => {
    try {
      const { mobile } = req.body;
      const user = await userModel.findOne({ mobile });
  
      if (user) {
        // If the user is found, assume the user has paid
        res.json({ hasPaid: true, paymentDate: user.createdAt });
      } else {
        // If the user is not found, assume the user has not paid
        res.json({ hasPaid: false, paymentDate: null });
      }
    } catch (error) {
      console.error('Error checking payment status:', error.message);
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    addUser,
    getAllUsers,
    checkPaymentStatus
}