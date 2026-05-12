const express = require('express');
const { applyLeave, updateLeaveStatus } = require('../controllers/leave.controller');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();
router.post('/', protect, applyLeave);
router.patch('/:id/status', protect, authorize('ADMIN', 'HR'), updateLeaveStatus);

module.exports = router;
