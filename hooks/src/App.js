import React, {useState} from "react";

const complexComp = (num) =>{
    let i = 0;
    
    while (i < 1000000000){
        i++
    }
    
    return num * 2;
}

function App() {
  
  const [number, setNumber] = useState(24);
  const [colored, setColored] = useState(false)
  
  const computed = complexComp(number);
  
  const styles = {
      color: colored ? 'darkred' : 'black'
  }
  
  return (
    <>
      <h1 style={styles}>Counting property: {computed}</h1>
      <button className={'btn btn-success'} onClick={()=>{setNumber(prev => prev + 1)}}>Increase</button>
        <button className={'btn btn-danger'} onClick={()=>{setNumber(prev => prev - 1)}}>Decrease</button>
        <button className={'btn btn-warning'} onClick={()=>{setColored(prev => !prev)}}>Change</button>
    
    </>
  );
}

export default App;
