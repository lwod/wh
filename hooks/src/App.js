import React, {useState} from "react";

function App() {
  
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);
  
  const styles = {color : colored ? 'darken' : 'black'}
  
  return (
    <>
      <h1 style={styles}>Element count: </h1>
      <button className={'btn btn-success'} onClick={()=>setCount(prev => prev + 1)}>Increase</button>
      <button className={'btn btn-warning'} onClick={()=>setColored(prev => !prev)}>Change</button>
    </>
  );
}

export default App;
