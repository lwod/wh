import React, {useState} from "react";


function App() {
    
    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })
    
    const updateTitle = () => {
        setState(prev=>{
            return {...prev, title:'new title'}
        })
    }
    
  return (
    <div>
      <h1>Counter</h1>

        <button onClick={updateTitle} className={"btn btn-default"}>Change title</button>
        
        <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
