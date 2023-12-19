const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.addUser);
router.get('/', userController.getAllUsers);
router.post('/checkPayment', userController.checkPaymentStatus);

module.exports = router;
