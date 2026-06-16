import React, { useState } from 'react';

export default function AttendanceCheckIn({ onCheckIn, onCheckOut, currentStatus }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-12 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-slate-100 mb-2">Today's Attendance</h2>
      <p className="text-sm text-slate-400 mb-6">Status: <span className="font-semibold text-emerald-400">{currentStatus || 'Not Checked In'}</span></p>
      
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onCheckIn}
          disabled={loading || currentStatus === 'PRESENT'}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-3 rounded-lg shadow-md transition-colors"
        >
          Check In
        </button>
        <button
          onClick={onCheckOut}
          disabled={loading || !currentStatus}
          className="w-full bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 font-medium py-3 rounded-lg transition-colors"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
