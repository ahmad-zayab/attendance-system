const express = require('express');
const { generateMonthlySummary } = require('../services/report.service');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/monthly-summary', protect, authorize('ADMIN', 'HR'), async (req, res, next) => {
  try {
    const { month } = req.query; // format: YYYY-MM
    const summary = await generateMonthlySummary(month || new Date().toISOString().slice(0, 7));
    res.status(200).json({ success: true, data: summary });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
