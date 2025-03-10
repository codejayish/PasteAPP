import './App.css'
import { useEffect, useState } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'
// Use Effect -> a React Hook which generates side effect Ex:- As DOM Content loads->DB shd be connected(side effect of Hook)
function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  //Inside Useeffect func. we have 3-categories to be understood - 1st,2nd,3rd i.e,.,
  // first -> side-effect function
  // second -> clean-up funtion
  // third -> comma separated dependency lists

  variation:1 
  // runs on every render 
  useEffect(() => {
    alert("I will run on each render")
  })

  variation: 2
  // that runs on only first render
  useEffect(() => {
    alert("I will run on only 1st render");
  }, [])

  variation: 3
  useEffect(() => {
    alert("I will run every time when count is updated")
  }, [count])

  variation: 4
  // multiple dependencies
  useEffect(() => {
    alert("I will run every time when count/total is updated")
  }, [count, total])


  variation: 5
  // iss baar let's add a cleanup function
  useEffect(() => {
    alert("Count is updated")
    return () => {
      alert("count is unmounted form UI");
    }
  }, [count])
  
  function handleClick() {
    setCount(count+1);
    
  }
  function handleClickTotal() {
    setTotal(total+1);
  }

  return (
      <div>
        <LoggerComponent />
        <TimerComponent />
        <ResizeComponent />
        <DataFetcher />
        <MultiEffectComponent />


        {/* <button onClick={handleClick}>
          update Count
        </button>
        <br/>
        Count is: {count} 

        <br />
        <button onClick={handleClickTotal}>
          update Total
        </button>
        <br/>
        Total is: {total}  */}
       </div>
  )
}

export default App
