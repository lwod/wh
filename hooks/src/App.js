import React, {useState} from "react";

function App() {
  
  const [name,setName] = useState('')
  
  const changeHandler = event => {
    setName(event.target.value)
  }
  
  return (
    <div className={'container pt-3'}>
      <input type={'text'} onChange={changeHandler}/>
        <h1>{name}</h1>
    </div>
  );
}

export default App;
