import React, {useState} from "react";

function App() {
  
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);
  
  const styles = {color : colored ? 'darkred' : 'black'}
  
  const generateItemsFromAPI = () => {
      return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }
  
  return (
    <>
      <h1 style={styles}>Element count: {count}</h1>
      <button className={'btn btn-success'} onClick={()=>setCount(prev => prev + 1)}>Increase</button>
      <button className={'btn btn-warning'} onClick={()=>setColored(prev => !prev)}>Change</button>
    </>
  );
}

export default App;
