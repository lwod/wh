import React, {useState, useEffect } from "react";

function App() {
    const [pos, setPos] = useState({
        x:0,
        y:0,
    })
    
    const mouseMoveHandler = (event)=>{
        setPos({
            x: event.clientX,
            y: event.clientY,
        })
    }
    
    useEffect(()=>{
       window.addEventListener('mousemove', mouseMoveHandler)
        
        return ()=>{
           window.removeEventListener('mousemove', mouseMoveHandler);
        }
       
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
