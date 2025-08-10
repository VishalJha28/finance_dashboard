import React, { useState, useEffect } from 'react';
import LiabilityCard from '../components/LiabilityCard.jsx';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'fd_liabilities_v1';

export default function Liabilities(){
  const [list, setList] = useState([]);
  const [form, setForm] = useState({name:'', amount:'', rate:''});
  useEffect(()=>{ const raw = localStorage.getItem(STORAGE_KEY); if(raw) setList(JSON.parse(raw)); },[]);
  useEffect(()=>{ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); },[list]);

  function addOrUpdate(e){
    e.preventDefault();
    if(!form.name || !form.amount) return alert('Please enter name and amount');
    if(form.id) setList(list.map(d=>d.id===form.id?form:d));
    else setList([{...form, id: uuidv4()}, ...list]);
    setForm({name:'', amount:'', rate:''});
  }
  function onEdit(d){ setForm(d); window.scrollTo({top:0, behavior:'smooth'}); }
  function onDelete(id){ if(confirm('Delete this liability?')) setList(list.filter(d=>d.id!==id)); }

  return (
    <div>
      <form onSubmit={addOrUpdate} className="mb-6 bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold text-blue-900 mb-3">Add / Edit Liability</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Liability name (e.g. Home loan)" className="p-2 border rounded" />
          <input value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} placeholder="Outstanding amount (₹)" className="p-2 border rounded" />
          <input value={form.rate} onChange={e=>setForm({...form, rate:e.target.value})} placeholder="Interest rate (%)" className="p-2 border rounded" />
        </div>
        <div className="mt-3 flex gap-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          <button type="button" onClick={()=>setForm({name:'', amount:'', rate:''})} className="px-4 py-2 bg-gray-100 rounded">Reset</button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(d => (
          <LiabilityCard key={d.id} debt={d} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
