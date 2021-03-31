import React, {useState} from "react";

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
  const lastName = useInput('')
  
  return (
    <div className={'container pt-3'}>
      <input type={'text'} {...input}/>
      <h1>{input.value}</h1>
      <input type={'text'} {...lastName}/>
      <h1>{lastName.value}</h1>
    </div>
  );
}

export default App;
