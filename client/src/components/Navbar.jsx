import React from 'react';

export default function Navbar({ user, onLogout }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">AT</div>
        <h1 className="text-lg font-bold text-slate-100">Attendance Portal</h1>
      </div>
      {user && (
        <div className="flex items-center space-x-4">
          <span className="text-xs text-indigo-400 font-semibold px-2 py-1 rounded bg-indigo-950/60">{user.role}</span>
          <span className="text-sm text-slate-300">{user.name} ({user.employeeId})</span>
          <button onClick={onLogout} className="text-xs text-red-400 hover:text-red-300 font-medium">Logout</button>
        </div>
      )}
    </header>
  );
}
