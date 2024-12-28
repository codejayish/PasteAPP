import React from 'react'

const ChildComponent = React.memo(              //wrapped the child component in React.memo() so that this component is not re-rendered unnecessarily
    (props) => {
    
        console.log("Child Component got re-rendered again");
      
        return (
          <div>
            <button onClick={props.handleClick}>
              {props.buttonName}
            </button>
          </div>
        )
      }
);

export default ChildComponent
//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga 

//if u r sending a function, then react.memo wont be able to save you from re-rendering