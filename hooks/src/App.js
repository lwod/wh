import React, {useState} from "react";

const complexComp = (num) =>{
    let i = 0;
    
    while (i < 1000000000){
        i++
    }
    
    return num * 2;
}

function App() {
  
  const [number, setNumber] = useState(24)
  
  const computed = complexComp(number)
  
  return (
    <>
      <h1>Counting property: {number}</h1>
      <button className={'btn btn-success'} onClick={()=>{setNumber(prev => prev + 1)}}>Increase</button>
      <button className={'btn btn-danger'} onClick={()=>{setNumber(prev => prev - 1)}}>Decrease</button>
    
    </>
  );
}

export default App;
