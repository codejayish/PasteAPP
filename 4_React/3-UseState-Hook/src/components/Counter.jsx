import React, { useState } from 'react'
import './Counter.css'

//we can use hooks to any components and here we r using useState Hook since we r creating a state "count" and state func. "setCount"
//UseState Hook -> (1)state variable(we store state) (2)state function(in which we can change state fucntion)
const Counter = () => {
  const [count, setCount] = useState(0);      //we used useState to create a state variable and initialized it from 0
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='btn' onClick={()=> { setCount(count+1) }} >Click me</button> 
        {/* //whenever we click on button then we will update state-variable */}
    </div>
  )
}

export default Counter
