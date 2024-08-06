import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth'; // Adjust the import path if necessary
import Sidebar from './Sidebar';
import './RegisterView.css';
// import { user } from '../../../server/controllers/auth-controller';

const View = () => {
  const { registeruserData } = useAuth();
  const [selectedRegister, setSelectedRegister] = useState('');

  // Function to filter users based on selected city
  const filteredUsers = selectedRegister
    ? registeruserData.filter(user => user.username === selectedRegister)
    : registeruserData;

    const deleteUser = (username) => {
      const updatedDistricts = selectedRegister.filter((_, i) => i !== username);
      setSelectedRegister(updatedDistricts);
      // Optionally, you could send a request to your API to delete the district
    };

    

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className='ViewMain'>
        <div className="Registeruser-table">
          <h2>Regitered User Table</h2>
          <br />
          <div>
            <label htmlFor="city">Filter by User name: </label>
            <input 
              type="text" 
              id="city" 
              value={selectedRegister} 
              onChange={(e) => setSelectedRegister(e.target.value)} 
              placeholder="Enter username name" 
            />
          </div>
          <br />
          {/* <button className="add-user-btn">
            <Link to="/newuser">Add User</Link>
          </button> */}
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>User Email</th>
                <th>User Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers && filteredUsers.map(user => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="edit-user-btn">
                      <Link to={`/edit-RegisteredUser/${user._id}`}>Edit</Link>
                    </button>
                    <button onClick={()=> deleteUser(user._id)} className="delete-user-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default View;
