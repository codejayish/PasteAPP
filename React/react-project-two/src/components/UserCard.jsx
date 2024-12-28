import React from 'react'
import lovepic from '../assets/lovepic.jpeg'
import "./UserCard.css"         
//here we have created a component named usercard as a func.
const UserCard = (props) => {                                  //props data is recieved like this
  return (
    <div className='user-container' style={props.style} >
      <p id='user-name'>{props.name}</p>                        //ceated props in app.jsx is used here for data acceses
      <img id='user-img' src={props.image} alt={props.name}></img>
      <p id='user-desc'>{props.desc}</p> 
    </div>
  )
}

export default UserCard
