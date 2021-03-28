import React, {useState, useEffect } from "react";

function App() {
  const [type, setType] = useState('users')
    
    useEffect(()=>{
        console.log('renderer')
    })
    
  return (
    <div>
      <h1>Source: {type}</h1>
      <button onClick={()=>{setType('users')}}>Users</button>
      <button onClick={()=>{setType('todo')}}>Todo</button>
      <button onClick={()=>{setType('posts')}}>Posts</button>
    </div>
  );
}

export default App;
