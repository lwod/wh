import React, {useState} from "react";

function App() {
    const [counter, setCounter] =  useState(0)
    
    const increment = () =>{
        setCounter(counter + 1)
    }
    
    const decrement = () =>{
        setCounter(counter - 1)
    }
    
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className={"btn btn-success"}>Increase</button>
      <button onClick={decrement} className={"btn btn-danger"}>Decrease</button>
    </div>
  );
}

export default App;
