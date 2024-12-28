import React, { useState } from 'react'
import './Counter.css'


const Counter = () => {
  const [count, setCount] = useState(0);      //we used useState to create a state variable and initialized it from 0
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='btn' onClick={()=> { setCount(count+1) }} >Click me</button> //whenever we cliclk on button then we will update state-variable
    </div>
  )
}

export default Counter
