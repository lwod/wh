import React, {useState} from "react";

function App() {
  
  const [number, setNumber] = useState(24)
  
  return (
    <>
      <h1>Counting property: {number}</h1>
      <button className={'btn btn-success'} onClick={()=>{setNumber(prev => prev + 1)}}>Increase</button>
      <button className={'btn btn-danger'} onClick={()=>{setNumber(prev => prev - 1)}}>Decrease</button>
    
    </>
  );
}

export default App;
