import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" end>
        🚀 Crewmates
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/crewmates" className={({ isActive }) => (isActive ? 'active' : '')}>
          Crew Gallery
        </NavLink>
        <NavLink to="/new" className={({ isActive }) => (isActive ? 'active' : '')}>
          New Crewmate
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
