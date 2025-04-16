import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState("Red");
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1> This is {color}</h1>
    <button
      type="button"
      onClick={()=> setColor("Blue" )}
    > Make it Blue</button>
    

    <div className=''>
      <h1>You have clicked on the button {count} number of time</h1>
      <button onClick={()=>{setCount(prev=>prev+1)}}>Click Me</button>
    </div>
    </div>
  );
}

export default App;


