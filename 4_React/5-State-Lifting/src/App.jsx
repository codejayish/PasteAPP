//whenever we change something in parent then it is reflected in child too becoz 
// the parent carries the state of both the child and parent eg:-searching from bunch
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
//whenever we change something in search-box, that gets searched down in child components
//here func. is parent component and inside div we have card which is child component
function App() {
  //we will create state here
  //we manage state here
  //we change state here itself
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
