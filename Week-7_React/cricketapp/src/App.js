import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => {
    setFlag(!flag);
  };

  return (
    <div className="app-container">
      <h1>Cricket App</h1>
      <button onClick={toggleFlag}>
        {flag ? 'Show Indian Players' : 'Show List of Players'}
      </button>
      <hr />
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
