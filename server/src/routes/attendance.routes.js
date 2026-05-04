const express = require('express');
const { checkIn, checkOut, getAttendanceHistory } = require('../controllers/attendance.controller');
const { protect } = require('../middleware/auth');

const router = express.Router();
router.post('/check-in', protect, checkIn);
router.post('/check-out', protect, checkOut);
router.get('/history', protect, getAttendanceHistory);

module.exports = router;
