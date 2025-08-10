import React from 'react';
export default function InvestmentCard({inv, onEdit, onDelete}){
  const color = inv.risk === 'safe' ? 'bg-blue-50 border-blue-200' : inv.risk === 'moderate' ? 'bg-sky-50 border-sky-200' : 'bg-rose-50 border-rose-200';
  const changeClass = inv.change >= 0 ? 'text-green-600' : 'text-red-600';
  return (
    <div className={`rounded-2xl border p-4 ${color}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">{inv.name}</h3>
          <p className="text-sm text-blue-700">{inv.type} • {inv.risk}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">₹{Number(inv.value).toLocaleString()}</p>
          <p className={`text-sm ${changeClass}`}>{inv.change >= 0 ? '▲' : '▼'} {Math.abs(inv.change)}%</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onEdit(inv)} className="px-3 py-1 rounded-md bg-blue-600 text-white">Edit</button>
        <button onClick={() => onDelete(inv.id)} className="px-3 py-1 rounded-md bg-red-100 text-red-700">Delete</button>
      </div>
    </div>
  );
}
