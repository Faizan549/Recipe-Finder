import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <img src="https://github.com/Zeeshu911/React_Five_Projects/blob/main/recipe-finder-app/public/logo.png?raw=true" alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar