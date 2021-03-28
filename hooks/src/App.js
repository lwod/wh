import React, {useState, useEffect, useRef} from "react";

function App() {
  const [value,setValue] = useState('init')
  const renderCurrent = useRef(1)
  const inputRef = useRef(null)

  const prevValue = useRef('');
  
  useEffect(()=>{
    renderCurrent.current++
    console.log(inputRef.current.value)
  })
    
    const focus = ()=>{
      inputRef.current.focus()
    }
  
   useEffect(()=>{
     prevValue.current = value
   }, [value])
   
  return (
    <div>
        <h1>Render counter: {renderCurrent.current}</h1>
        <h2>Last state: {prevValue.current}</h2>
      <input ref={inputRef} type={'text'} onChange={event=>{setValue(event.target.value)}} value={value}/>
      <button className={'btn'} onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
