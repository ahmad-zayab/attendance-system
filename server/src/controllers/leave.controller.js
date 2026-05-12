const Leave = require('../models/Leave');

exports.applyLeave = async (req, res, next) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;
    const leave = await Leave.create({
      user: req.user._id,
      employeeId: req.user.employeeId,
      leaveType,
      startDate,
      endDate,
      reason,
    });
    res.status(201).json({ success: true, data: leave });
  } catch (error) {
    next(error);
  }
};

exports.updateLeaveStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // APPROVED or REJECTED

    const leave = await Leave.findByIdAndUpdate(
      id,
      { status, reviewedBy: req.user._id },
      { new: true }
    );

    if (!leave) return res.status(404).json({ success: false, message: 'Leave request not found' });
    res.status(200).json({ success: true, data: leave });
  } catch (error) {
    next(error);
  }
};
