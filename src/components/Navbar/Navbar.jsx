import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>LAB - WikiCountries</NavLink>
                </li>


            </ul>
        </nav>
    );
}

export default Navbar;