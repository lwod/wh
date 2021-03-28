import React, {useState, useEffect } from "react";

function App() {
    const [pos, setPos] = useState({
        x:0,
        y:0,
    })
    
    useEffect(()=>{
       window.addEventListener('mousemove', (event)=>{
           setPos({
               x: event.clientX,
               y: event.clientY,
           })
       })
    },[])
    
  return (
    <div>
        <pre>
            {JSON.stringify(pos, null, 2)}
        </pre>
    </div>
  );
}

export default App;
