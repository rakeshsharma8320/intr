import React, { useState, useMemo } from "react";
import "./App.scss";
import Child from "./components/child";

function App() {
  const [i, setI] = useState(0);

  const memoChild = useMemo(() => <Child/>, [])

  return (
    <div className="App">
      <h2>use Memo</h2>
      <h3>i:{i} </h3>
      <button onClick={() => setI(i + 1)}>Increment I</button>
      <h3>normal render</h3>
      <Child />
      <h3>memo render</h3>
      {memoChild}
    </div>
  );
}

export default App;
