import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter((c) => c + 1)}>Increase</button>
    </div>
  );
};

export default App;
