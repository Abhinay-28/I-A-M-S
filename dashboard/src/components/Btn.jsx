import React from 'react'
import './Btn.css'
import { useNavigate } from 'react-router-dom';


const Btn = () => {

    const navigate = useNavigate();

    const handleLogout = (e) => {
      e.preventDefault()
      // Perform logout logic here (e.g., clearing authentication tokens)
      navigate('/logout');
    };

    
  return (
    <div className="btn">
        
    <button className='logoutbtn' onClick={handleLogout}>LogOut</button>
    
  </div>
  )
}

export default Btn