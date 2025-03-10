import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* NavLink has inbuilt boolean flag named isActive which is used to change CSS */}
            <NavLink to='/' className={({isActive}) => isActive ? "active-link": ""}> 
                Home 
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive}) => isActive ? "active-link": ""}> About </NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-link": ""}> Dashboard </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
