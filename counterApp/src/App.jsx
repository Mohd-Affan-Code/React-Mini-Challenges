import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="counter">
        <h1>{count}</h1>
        <div className="counter-btn">
          <button className="increment" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
          <button className="decrement" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
