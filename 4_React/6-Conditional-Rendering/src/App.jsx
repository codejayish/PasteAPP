
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);
  //we use state var. to check whether the user is logged in or not and based on that we show the desired buttons
  if(!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }
  
  return (
    <div>
      <h1> Welcome Everyone to Codehelp Web dev course</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
        {/* if user is logged in, thenwe show logout button */}
      </div> 
    </div>
  )



  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn />}   //if user is logged-in then we show logout button else login button
  //   </div>
  // )



  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn />
  //   )
  // }


}

export default App
