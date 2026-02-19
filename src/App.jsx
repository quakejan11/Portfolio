import React from 'react';
import Terminal from './components/Terminal';

function App() {
  const initialLines = [
    "Welcome to Jan's portfolio.",
    "Type 'help' to see available commands."
  ];

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col">
      <Terminal initialLines={initialLines} />
    </div>
  );
}

export default App;