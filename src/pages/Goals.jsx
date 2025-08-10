import React, { useState, useEffect } from 'react';
import GoalCard from '../components/GoalCard.jsx';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'fd_goals_v1';

export default function Goals(){
  const [list, setList] = useState([]);
  const [form, setForm] = useState({name:'', target:'', progress:0});
  useEffect(()=>{ const raw = localStorage.getItem(STORAGE_KEY); if(raw) setList(JSON.parse(raw)); },[]);
  useEffect(()=>{ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); },[list]);

  function addOrUpdate(e){
    e.preventDefault();
    if(!form.name || !form.target) return alert('Please enter name and target');
    if(form.id) setList(list.map(g=>g.id===form.id?form:g));
    else setList([{...form, id: uuidv4()}, ...list]);
    setForm({name:'', target:'', progress:0});
  }
  function onEdit(g){ setForm(g); window.scrollTo({top:0, behavior:'smooth'}); }
  function onDelete(id){ if(confirm('Delete this goal?')) setList(list.filter(g=>g.id!==id)); }

  return (
    <div>
      <form onSubmit={addOrUpdate} className="mb-6 bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold text-blue-900 mb-3">Add / Edit Goal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Goal name (e.g. Buy a car)" className="p-2 border rounded" />
          <input value={form.target} onChange={e=>setForm({...form, target:e.target.value})} placeholder="Target amount (₹)" className="p-2 border rounded" />
          <input value={form.progress} onChange={e=>setForm({...form, progress:e.target.value})} placeholder="Progress (%)" className="p-2 border rounded" />
        </div>
        <div className="mt-3 flex gap-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save Goal</button>
          <button type="button" onClick={()=>setForm({name:'', target:'', progress:0})} className="px-4 py-2 bg-gray-100 rounded">Reset</button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(g => (
          <GoalCard key={g.id} goal={g} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
