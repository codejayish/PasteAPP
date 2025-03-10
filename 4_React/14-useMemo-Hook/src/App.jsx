//memoisation = the calculated value is stored inside so that when it is called next time there is no need for calculation again and gives value directly
import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for(let i=0; i<=1000000000; i++) {}
    return num*2;
  }
  
  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  //here we used useMemo hook so that we minimise time lag and restore data efficiently
  

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <input 
        type='number'
        placeholder='enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}

      />

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
