
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

//here func. is parent component and inside div we have card which is child component
function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadunga 
  const [name, setName] = useState('');

  return (
    <div>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      {/* <p>I am inside Parent Component and Value of name is {name}</p> */}
    </div>
  )
}

export default App
