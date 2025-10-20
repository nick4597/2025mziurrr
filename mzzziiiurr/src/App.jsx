import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const projectName = "Clicker-Game";

  return (
    <>
      <h1>{projectName}</h1>
      <h2>Counter: {counter}</h2>
      <button
        style={{
          margin: "5px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>


export default App;