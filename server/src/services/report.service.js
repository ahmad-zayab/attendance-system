const Attendance = require('../models/Attendance');

exports.generateMonthlySummary = async (monthYear) => {
  // Leverages MongoDB aggregation pipeline with index utilization
  return await Attendance.aggregate([
    { $match: { date: { $regex: `^${monthYear}` } } },
    {
      $group: {
        _id: '$employeeId',
        totalDays: { $sum: 1 },
        presentCount: { $sum: { $cond: [{ $eq: ['$status', 'PRESENT'] }, 1, 0] } },
        lateCount: { $sum: { $cond: [{ $eq: ['$status', 'LATE'] }, 1, 0] } },
        totalHours: { $sum: { $divide: ['$workDurationMinutes', 60] } },
      },
    },
    { $sort: { _id: 1 } },
  ]);
};
