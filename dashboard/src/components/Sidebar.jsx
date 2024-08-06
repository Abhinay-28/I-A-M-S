  import React, { useEffect, useState } from 'react';
  import { Link, Navigate,useNavigate } from 'react-router-dom';
  import './sidebar.css';
  import Btn from './Btn';
  import { useAuth } from '../store/auth';
  import Halfside from './Halfside';
  import Chartss from './Chartss'

  const Sidebar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const { token } = useAuth();

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
let navigate=useNavigate()


  useEffect(()=>{
  //  alert(localStorage.getItem("token"))

    if(localStorage.getItem("token")=='null'){
    navigate("/halfside")
    }
    // if (!isLoggedIn) {
    //  
    //   return <Navigate to='/halfside' />;

    // }

  },[localStorage.getItem("token")])
  

    return (
      <div className="sidebar">
       
        <h2>Dashboard</h2>
        <ul>
          <li>
            <button onClick={toggleDropdown} className="dropdown-btn">
              Masters
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/country">Country</Link></li>
                <li><Link to="/state">State</Link></li>
                <li><Link to="/district">District</Link></li>
                <li><Link to="/city">City</Link></li>
                <li><Link to="/pincode">Pincode</Link></li>
                <li><Link to="/person-name">Person Name</Link></li>
              </ul>
            )}
          </li>
        </ul>
        <ul>
          <li>
            <button className="dropdown-btn">
              <Link to="/users">Members</Link>
            </button>

            <button className="dropdown-btn">
              <Link to="/statistics">Statistics</Link>
            </button>


            <button className="dropdown-btn">
              <Link to="/Rusers">Users</Link>
            </button>
          </li>
        </ul>
        <div ><Btn /></div>
        {/* <Chartss/> */}
      </div>
    );
  };

  export default Sidebar;
