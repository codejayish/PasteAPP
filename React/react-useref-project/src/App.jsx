
import { useState,useEffect, useRef } from 'react'
import './App.css'

//when state-variable is changed -> it re-renders UI
//when useRef-variable is changed -> does NOT re-renders UI(it will persist the value across re-render)

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef();               //button refernece is taken using useRef

  // function handleIncrement() {
  //   val.current = val.current + 1;
  //   console.log("Value of val: ", val.current);
  //   setCount(count +1);
  // }

  // // useEffect hook = it runs on every render
  // useEffect(() => {
  //   console.log("main ferse render hogya hu")
  // })
  
  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";              //this is how we can change the reference
  // }

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

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


      {/* <h1>StopWatch: {time} seconds</h1>
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
      </button> */}


      {/* <button 
      ref={btnRef}
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
      </div> */}
    </div>
  )
}

export default App
