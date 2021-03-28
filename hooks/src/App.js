import React, {useState} from "react";

function App() {
    const [counter, setCounter] =  useState(0)
    
  return (
    <div>
      <h1>Counter</h1>
      <button className={"btn btn-success"}>Increase</button>
      <button className={"btn btn-danger"}>Decrease</button>
    </div>
  );
}

export default App;
