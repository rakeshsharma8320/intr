import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    console.log("i am born");
    return () => console.log("did mount return called");
  }, []);
  
  useEffect(() => {
    console.log("you are growing");
    return () => {
      console.log("return function is called");
    };
  });

  return (
    <div className="App">
      <h2>use effect</h2>
      <h3>growth:{growth} </h3>
      <button onClick={() => setGrowth(growth + 10)}>born and grow</button>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     console.log("did mount called");
//   }
//   componentDidUpdate() {
//     console.log("did update is called");
//   }
//   render() {
//     return <button onClick={() => this.setState({ x: 1 })}>hello</button>;
//   }
// }
export default App;
