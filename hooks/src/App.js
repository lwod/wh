import React, {useState, useEffect, useRef} from "react";

function App() {
  const [value,setValue] = useState('init')
  const renderCurrent = useRef(1)
  const inputRef = useRef(null)
  
  
  useEffect(()=>{
    renderCurrent.current++
    console.log(inputRef.current.value)
  })
  
  return (
    <div>
      <h1>Render counter: {renderCurrent.current}</h1>
      <input ref={inputRef} type={'text'} onChange={event=>{setValue(event.target.value)}} value={value}/>
    </div>
  );
}

export default App;
