import { useState,useEffect, useRef } from 'react'
import './App.css'

//when state-variable is changed -> it re-renders UI
//when useRef-variable is changed -> does NOT re-renders UI(it will persist the value across re-render)
 

//UseRef is used to change directly the DOM using 3-steps:- (1)create reference for DOM element (2)link that reference to element (3)ref.current - changes the required modifications
function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);v //here val-becomes an object of useRef and it persists it's value all the way even if page gets re-renders

  let btnRef = useRef();               //button refernece is taken using useRef

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count +1);
  }

  // useEffect hook = it runs on every render
  useEffect(() => {
    console.log("main ferse render hogya hu")
  })
  
  function changeColor() {
    btnRef.current.style.backgroundColor = "red";              //this is how we can change the property of button using btnRef
  }

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);
 //We use the object created by UseRef so that we can persist the value that is changing
  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>


      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/> <br/>

      <button onClick={stopTimer}>
        Stop
      </button>
      <br/> <br/>

      <button onClick={resetTimer}>
        Reset
      </button> 


      <button 
      ref={btnRef}        //useRef can be linked to the button like this
      onClick={handleIncrement}>
        Increment
      </button>
      <br/>
<br/>
      <button onClick={changeColor}>
        Change Color of 1st Button
      </button>

      <br/>

      <div>
        Count: {count}
      </div>
    </div>
  )
}

export default App
