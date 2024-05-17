import React from 'react';
import Dashboard from './dashboard';

function App() {
  const items = [
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' },
    { name: 'Dashboard', link: '#' }
    // Add more items here as needed
  ];

  return (
    <div className=" flex">
      <Dashboard items={items} />
      
    </div>
  );
}

export default App;
