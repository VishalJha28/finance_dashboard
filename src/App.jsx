import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Investments from './pages/Investments.jsx';
import Goals from './pages/Goals.jsx';
import Liabilities from './pages/Liabilities.jsx';
import NetWorth from './pages/NetWorth.jsx';
import Navbar from './components/Navbar.jsx';

export default function App(){
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Investments />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/liabilities" element={<Liabilities />} />
            <Route path="/networth" element={<NetWorth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
