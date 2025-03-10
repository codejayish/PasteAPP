// App.jsx is the parent for the Button.jsx component 
import React from 'react'

//props are created at parent-level and used at childern-level
const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>     
          {/* inside child component we r using the func. written in parent component  */}
            {props.text} 
        </button>
    </div>
    
  )
}

export default Button
