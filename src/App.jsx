import React, { useState } from 'react';

function App() {
  const [state, setState] = useState('');
  return (
    <div className="h-screen w-screen" style={{ backgroundColor: state }}>
      <div className="p-4 bg-gray-200 flex justify-center space-x-2">
        <button
          onClick={() => setState('cyan')}
          className="bg-cyan-400"
        >
          Cyan
        </button>
        <button
          onClick={() => setState('green')}
          className="bg-green-700"
        >
          Green
        </button>
        <button
          onClick={() => setState('red')}
          className="bg-red-700"
        >
          Red
        </button>
        <button
          onClick={() => setState('yellow')}
          className="bg-yellow-700"
        >
          Yellow
        </button>
        <button
          onClick={() => setState('purple')}
          className="bg-purple-700"
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
