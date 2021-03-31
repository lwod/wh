import React, {useState, useEffect} from "react";

function useLogger(value){
  useEffect(()=>{
    console.log(value)
  },[value])
}

function useInput(initialValue){
  
  const [value, setValue] = useState(initialValue)
  
  const onChange = event => {
    setValue(event.target.value)
  }
  
  return{
    value, onChange
  }
}

function App() {
  const input = useInput('')
  
  useLogger(input.value)
  
  return (
    <div className={'container pt-3'}>
      <input type={'text'} value={input.value} onChange={input.onChange}/>
        <h1>{input.value}</h1>
    </div>
  );
}

export default App;
