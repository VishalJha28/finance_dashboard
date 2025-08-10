import React, { useState, useEffect } from 'react';
import NetWorthCard from '../components/NetWorthCard.jsx';

export default function NetWorth(){
  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);

  useEffect(()=>{
    const ai = localStorage.getItem('fd_investments_v1');
    const li = localStorage.getItem('fd_liabilities_v1');
    if(ai) setAssets(JSON.parse(ai));
    if(li) setLiabilities(JSON.parse(li));
  },[]);

  return (
    <div>
      <NetWorthCard assets={assets} liabilities={liabilities} />
    </div>
  );
}
