const Attendance = require('../models/Attendance');

exports.checkIn = async (req, res, next) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const existing = await Attendance.findOne({ user: req.user._id, date: today });

    if (existing) {
      return res.status(400).json({ success: false, message: 'Already checked in for today' });
    }

    const now = new Date();
    const isLate = now.getHours() >= 9 && now.getMinutes() > 30;

    const record = await Attendance.create({
      user: req.user._id,
      employeeId: req.user.employeeId,
      date: today,
      checkInTime: now,
      status: isLate ? 'LATE' : 'PRESENT',
      ipAddress: req.ip,
    });

    res.status(201).json({ success: true, data: record });
  } catch (error) {
    next(error);
  }
};

exports.checkOut = async (req, res, next) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const record = await Attendance.findOne({ user: req.user._id, date: today });

    if (!record) {
      return res.status(404).json({ success: false, message: 'No check-in record found for today' });
    }

    record.checkOutTime = new Date();
    record.workDurationMinutes = Math.round((record.checkOutTime - record.checkInTime) / (1000 * 60));
    await record.save();

    res.status(200).json({ success: true, data: record });
  } catch (error) {
    next(error);
  }
};

exports.getAttendanceHistory = async (req, res, next) => {
  try {
    const { startDate, endDate, page = 1, limit = 20 } = req.query;
    const filter = { user: req.user._id };

    if (startDate && endDate) {
      filter.date = { $gte: startDate, $lte: endDate };
    }

    // Leverages compound index { user: 1, date: -1 } for sub-30ms execution
    const records = await Attendance.find(filter)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .lean();

    res.status(200).json({ success: true, count: records.length, data: records });
  } catch (error) {
    next(error);
  }
};
