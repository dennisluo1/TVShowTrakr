import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return(
        <header>
            <h1>TV Show Trackr</h1>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li>User Dashboard</li>
                <li onClick={props.logOut}><Link to='/'>Log Out</Link></li>
            </nav>
        </header>
    )
}

export default Header;