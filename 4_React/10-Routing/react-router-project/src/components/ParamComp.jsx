import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
  const {id} = useParams();   //here id is a route-parameter

  return (
    <div>
      Params: {id}
    </div>
  )
}

export default ParamComp
