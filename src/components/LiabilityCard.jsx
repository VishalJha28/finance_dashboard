import React from 'react';
export default function LiabilityCard({debt, onEdit, onDelete}){
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">{debt.name}</h3>
          <p className="text-sm text-gray-600">Rate: {debt.rate}%</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">₹{Number(debt.amount).toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onEdit(debt)} className="px-3 py-1 rounded-md bg-blue-600 text-white">Edit</button>
        <button onClick={() => onDelete(debt.id)} className="px-3 py-1 rounded-md bg-red-100 text-red-700">Delete</button>
      </div>
    </div>
  );
}
