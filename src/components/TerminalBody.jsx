import React from 'react';
import { CommandOutput } from './CommandOutput';
import { CommandInput } from './CommandInput';

export const TerminalBody = ({ lines, input, setInput, handleSubmit, terminalEndRef }) => {
  
  // Function to render lines with clickable project numbers
  const renderLine = (line, index) => {
    // Check if line contains a project number in format [1], [2], etc.
    const projectMatch = line.match(/\[(\d+)\]/);
    
    if (projectMatch) {
      const projectId = projectMatch[1];
      const parts = line.split(/\[\d+\]/);
      
      return (
        <div key={index}>
          {parts[0]}
          <button
            onClick={() => {
              window.open(`/project/${projectId}`, '_blank');
            }}
            className="text-green-400 hover:text-green-300 underline inline"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit' }}
          >
            [{projectId}]
          </button>
          {parts[1]}
        </div>
      );
    }
    
    return <div key={index}>{line}</div>;
  };

  return (
    <div className="flex-1 p-4 text-green-400 overflow-y-auto space-y-1 min-h-0">
      {lines.map((line, index) => renderLine(line, index))}
      <CommandInput 
        input={input} 
        setInput={setInput} 
        handleSubmit={handleSubmit} 
      />
      <div ref={terminalEndRef} />
    </div>
  );
};