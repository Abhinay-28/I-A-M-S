import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../store/auth';

const Navbar = ({  onLogout }) => {
  const isLoggedIn = useAuth()
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Dashboard</Link>
      <div className="nav-right">
        {isLoggedIn ? (
          <>
            <span>Welcome, User</span>
            
           <Link to="/logout"><button onClick={onLogout} className="nav-button">Logout</button></Link> 
          </>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
