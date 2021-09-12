import React from 'react'
// import Dropdown from '../dropdown/Dropdown'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">About</Link>
                    </li>
                    <li className="nav-iteme">
                        <Link to="/" className="nav-link">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">a</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
