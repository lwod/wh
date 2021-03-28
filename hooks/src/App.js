import React, {useState} from "react";

const initCounter = () => {
    console.log('calc counter');
    return Math.trunc(Math.random() * 20)
}

function App() {
    const [counter, setCounter] =  useState(initCounter)
    
    const increment = () =>{
        setCounter(prevCounter => prevCounter + 1)
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
