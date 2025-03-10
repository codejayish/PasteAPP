import React from 'react'

// when parent send value to ChannelSplitterNode, here the child accept like this
const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=> props.setName(e.target.value)}/>
      <p>Name state variable ki value inside {props.title} : {props.name}</p>
    </div>
  )
}
//here, when we change anything in child component, then it is visible in parent-component
export default Card
