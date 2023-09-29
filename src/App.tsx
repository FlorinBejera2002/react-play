import "./App.css";
import { useState } from "react";

export const App = () => {
  const [result, setResult] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const calculateSum = () => {
    const sum =  numberOne+ numberTwo;
    setResult(sum);
  };

  return (
    <div>
      <h1>Play-Calculator</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ gap: "10px", display: "flex" }}>
          <input
            onChange={(e) => {
              setNumberOne(+e.target.value);
            }}
            type="text"
            value={numberOne}
          />
          <input
            type="text"
            value={numberTwo}
            onChange={(e) => {
              setNumberTwo(+e.target.value);
            }}
          />
        </div>

        <button onClick={calculateSum}>+</button>
        <label>result : {result}</label>
      </div>
    </div>
  );
};
