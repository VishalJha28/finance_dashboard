import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">FD</div>
          <h1 className="text-xl font-semibold">Finance Dashboard</h1>
        </div>
        <div className="flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'underline' : ''}>Investments</NavLink>
          <NavLink to="/goals" className={({isActive}) => isActive ? 'underline' : ''}>Goals</NavLink>
          <NavLink to="/liabilities" className={({isActive}) => isActive ? 'underline' : ''}>Liabilities</NavLink>
          <NavLink to="/networth" className={({isActive}) => isActive ? 'underline' : ''}>Net Worth</NavLink>
        </div>
      </div>
    </nav>
  );
}
