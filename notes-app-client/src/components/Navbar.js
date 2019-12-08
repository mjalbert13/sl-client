import React, { Fragment } from 'react'
import { Auth } from 'aws-amplify';
import { Link, withRouter } from 'react-router-dom';
const Navbar = ({ appProps }) => {
    console.log(appProps)
    
    async function handleLogout() {

        await Auth.signOut();

        appProps.userHasAuthenticated(false);

        

    }

    const authLinks =(
        <ul>
            <li><Link to='/settings'>Settings</Link></li>
            <li onClick={handleLogout}>Logout</li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='signup'>Sign Up</Link></li>
        </ul>
    )
    
    
    return (
        <div>
            <nav className='navbar bg-dark'>
                <h1><Link to='/'>Scratch</Link></h1>
                { appProps.isAuthenticated ? authLinks : guestLinks }
            </nav>
           
        </div>
    )
}

export default withRouter(Navbar);