import React from 'react';
export default function NetWorthCard({assets, liabilities}){
  const totalAssets = assets.reduce((s,a)=>s+Number(a.value||0),0);
  const totalLiab = liabilities.reduce((s,l)=>s+Number(l.amount||0),0);
  const net = totalAssets - totalLiab;
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <h3 className="text-lg font-semibold text-blue-900">Net Worth</h3>
      <p className="text-2xl font-bold mt-3">₹{net.toLocaleString()}</p>
      <div className="mt-2 text-sm text-gray-600">Assets: ₹{totalAssets.toLocaleString()} • Liabilities: ₹{totalLiab.toLocaleString()}</div>
    </div>
  );
}
