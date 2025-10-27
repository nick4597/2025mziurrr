import React from "react";

export default function CounterButton({ title, handleClick }) {
  return (
    <button
      style={{
        margin: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
const MemorizCounterButton = React.memo(CounterButton);
export {MemorizCounterButton};
console.log("CounterButton component loaded"
); console.log("CounterButton component loaded");
const a = 10; b = 20; console.log(a + b);
const x = 5; y = 15; console.log(x * y);