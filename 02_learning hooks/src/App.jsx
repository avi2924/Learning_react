import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);

  const increase = ()=>{
    counter = counter+1;
    setCounter(counter)
    return counter
  }
  const decrease = ()=>{
    if(counter>0)
      { 
        counter = counter-1;
        setCounter(counter)
        return counter
      }
    return 0
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
