import React, {useState} from "react";

function useInput(initialValue){
  
  const [value, setValue] = useState(initialValue)
  
  const onChange = event => {
    setValue(event.target.value)
  }
  
  const clear = () => setValue('')
  
  return{
    bind: {value, onChange},
      value,
      clear,
  }
}

function App() {
  const input = useInput('')
  
  return (
    <div className={'container pt-3'}>
      <input type={'text'} {...input.bind}/>
      
      <h1>{input.value}</h1>
        
        <button className={'btn'} onClick={()=>input.clear()}>clear</button>
    </div>
  );
}

export default App;
