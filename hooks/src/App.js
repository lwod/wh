import React, {useState, useEffect, useRef} from "react";

function App() {
  const [value,setValue] = useState('init')
  const renderCurrent = useRef(1)
  
  useEffect(()=>{
    renderCurrent.current++
  })
  
  return (
    <div>
      <h1>Render counter: {renderCurrent.current}</h1>
      <input type={'text'} onChange={event=>{setValue(event.target.value)}} value={value}/>
    </div>
  );
}

export default App;
