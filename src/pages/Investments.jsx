import React, { useState, useEffect } from 'react';
import InvestmentCard from '../components/InvestmentCard.jsx';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'fd_investments_v1';

export default function Investments(){
  const [list, setList] = useState([]);
  const [form, setForm] = useState({name:'', type:'General', value:'', risk:'moderate', change:0});
  useEffect(()=>{ const raw = localStorage.getItem(STORAGE_KEY); if(raw) setList(JSON.parse(raw)); },[]);
  useEffect(()=>{ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); },[list]);

  function addOrUpdate(e){
    e.preventDefault();
    if(!form.name || !form.value) return alert('Please enter name and value');
    if(form.id){
      setList(list.map(i=>i.id===form.id?form:i));
    }else{
      setList([{...form, id: uuidv4()}, ...list]);
    }
    setForm({name:'', type:'General', value:'', risk:'moderate', change:0});
  }
  function onEdit(item){ setForm(item); window.scrollTo({top:0, behavior:'smooth'}); }
  function onDelete(id){ if(confirm('Delete this investment?')) setList(list.filter(i=>i.id!==id)); }

  return (
    <div>
      <form onSubmit={addOrUpdate} className="mb-6 bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold text-blue-900 mb-3">Add / Edit Investment</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="p-2 border rounded" />
          <input value={form.type} onChange={e=>setForm({...form, type:e.target.value})} placeholder="Type (e.g. ETF, FD, Crypto)" className="p-2 border rounded" />
          <input value={form.value} onChange={e=>setForm({...form, value:e.target.value})} placeholder="Current value (₹)" className="p-2 border rounded" />
          <select value={form.risk} onChange={e=>setForm({...form, risk:e.target.value})} className="p-2 border rounded">
            <option value="safe">Safe</option>
            <option value="moderate">Moderate</option>
            <option value="risky">Risky</option>
          </select>
        </div>
        <div className="mt-3 flex gap-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          <button type="button" onClick={()=>setForm({name:'', type:'General', value:'', risk:'moderate', change:0})} className="px-4 py-2 bg-gray-100 rounded">Reset</button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(inv => (
          <InvestmentCard key={inv.id} inv={inv} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
