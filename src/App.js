import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        {/* <!-- counters --> */}
        <div class="max-w-md mx-auto mt-10 space-y-5">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
