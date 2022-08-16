import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  const increment = (id) => {
    const updatedIncrementCounter = state.map((c) => {
      if (id === c.id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });
    setState(updatedIncrementCounter);
  };

  const decrement = (id) => {
    const updatedDecrementCounter = state.map((c) => {
      if (id === c.id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setState(updatedDecrementCounter);
  };
  const totalCount = () => {
    return state.reduce((total, counter) => total + counter?.count, 0);
  };
  return (
    <div className="App">
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        {/* <!-- counters --> */}
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {state.map((count) => (
            <>
              <Counter
                key={count?.id}
                id={count?.id}
                value={count?.count}
                increment={increment}
                decrement={decrement}
              />
            </>
          ))}

          <Stats count={totalCount()} />
        </div>
      </div>
    </div>
  );
}

export default App;
