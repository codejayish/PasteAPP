import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();  //we r using "useNavigate hook" here to go to other webpage directly
    function handleClick() {
        navigate('/about');
    }

  return (
    <div>
      Home Page
      <button onClick={handleClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
