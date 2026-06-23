import React from 'react';

export default function AdminDashboard({ records }) {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-100">Department Attendance Overview</h2>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-lg">
          Export CSV Report
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800/60 text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-6 py-3">Employee ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Check In</th>
              <th className="px-6 py-3">Duration</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {records && records.map((r, i) => (
              <tr key={i} className="hover:bg-slate-800/30">
                <td className="px-6 py-4 font-mono font-medium">{r.employeeId}</td>
                <td className="px-6 py-4">{r.date}</td>
                <td className="px-6 py-4">{new Date(r.checkInTime).toLocaleTimeString()}</td>
                <td className="px-6 py-4">{r.workDurationMinutes} min</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-950 text-emerald-400">
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
