import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Dashboard page
      {/* an outlet tag must be used in parent tag if we r creating nested routes */}
      <Outlet />
    </div>
  )
}

export default Dashboard
