import React from 'react'

//props are created at parent-level and used at childern-level
const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>     //using props here, we have passed a func.
            {props.text} 
        </button>
    </div>
    
  )
}

export default Button
