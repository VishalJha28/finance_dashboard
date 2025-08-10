import React from 'react';
export default function GoalCard({goal, onEdit, onDelete}){
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">{goal.name}</h3>
          <p className="text-sm text-gray-600">Target: ₹{Number(goal.target).toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">{Math.round(goal.progress)}%</p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onEdit(goal)} className="px-3 py-1 rounded-md bg-blue-600 text-white">Edit</button>
        <button onClick={() => onDelete(goal.id)} className="px-3 py-1 rounded-md bg-red-100 text-red-700">Delete</button>
      </div>
    </div>
  );
}
