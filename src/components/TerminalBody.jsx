import React from 'react';
import { CommandOutput } from './CommandOutput';
import { CommandInput } from './CommandInput';

export const TerminalBody = ({ lines, input, setInput, handleSubmit, terminalEndRef }) => {
  return (
    <div className="flex-1 p-4 text-green-400 overflow-y-auto space-y-1 min-h-0">
      <CommandOutput lines={lines} />
      <CommandInput 
        input={input} 
        setInput={setInput} 
        handleSubmit={handleSubmit} 
      />
      <div ref={terminalEndRef} />
    </div>
  );
};