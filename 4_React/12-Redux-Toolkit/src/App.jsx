//store = a centralized entity where we can store the state of any element and these states can be used by some other elemenst as they need
//Reduc toolkit = we create a centralized entiry called "store" and we store and manage "state" of any elements
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

// Increment btn -> Onclick -> handler i.e,.handleclick() -> dispatch(increment()) -> store -> Reducer(Increment()) -> Increment(count+1) -> store updates its count -> UI update 

function App() {
  const [amount, setAmount] = useState(0);
  //if we need to fetch particular var./data from a entity we use "useSelector" hook
  const count = useSelector((state) => state.counter.value);  //we use useselector as it will take out the value-entity from a slice named counter
  const dispatch = useDispatch();                //we use a hook named "useDispatch" to dispatch the functions

  function handleIncrementClick() {
      dispatch(increment());  // we disptach the action named increment as this fucntion gets kicked
  }

  function handleDecrementClick() {
      dispatch(decrement());
  }

  function handleResetClick() {
      dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br/>
        <br/>
        <button onClick={handleResetClick}> Reset </button>
        <br/>
        <br/>
        <input 
          type='Number'
          value={amount}
          placeholder='Enter Amount'
          onChange={(e) => setAmount(e.target.value)}
         />
         <br/>
        <br/>
        <button onClick={handleIncAmountClick}> Inc by Amount </button>
    </div>
  )
}
// Terms:-
// Action  = the action performed on UI and the Event orginated from that action is wrapped in Event handler
// Reducer = to handle this Event we write some logics in functions and they r called reducers
// Slice   = we have multiple features in our application and each feature might be accessing multiple states and these features r called slice 
// store   = a single source where all the data is dumped 
// State   = a fancy name for data
export default App
