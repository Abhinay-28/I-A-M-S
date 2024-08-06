import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Sidebar from './Sidebar';

// import './EditRegisteredUser.css';

const EditRegisteredUser = () => {
  const { registeruserData,updateRegisteredUser  } = useAuth();
  const { RegisteredUserId } = useParams(); // Extract RegisteredUserId from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  useEffect(() => {
    console.log(registeruserData);
    
    // Ensure registeruserData is an array before using .find
    if (Array.isArray(registeruserData)) {
      const currentUser = registeruserData.find(user => user._id === RegisteredUserId);
      if (currentUser) {
        setFormData({
          id: currentUser._id,
          username: currentUser.username,
          email: currentUser.email,
          phone: currentUser.phone,
          password: currentUser.password
        });
      }
    }
  }, [RegisteredUserId, registeruserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("wwwwwwwwww")
    try {
      const response = await fetch(`http://localhost:9998/api/editRegisteredUser-id/${formData.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
        
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log('kksksksks');
        
        
        console.log(res_data);
        setFormData({
          id: '',
          username: '',
          email: '',
          phone: '',
          password: ''
        });
        
       updateRegisteredUser (formData); // Optionally update local state
        navigate('/Rusers'); // Redirect to the registered users page after updating
      } else {
        console.error('Update failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="edit-registered-user-container">
        <h2>Edit Registered User</h2>

        {/* Display Container */}
        <div className="registered-user-display-container">
          {formData.id ? (
            <>
              <h3>Current Registered User Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>User Name:</strong> {formData.username}</div>
              <div><strong>User Email:</strong> {formData.email}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>Password:</strong> {formData.password}</div>
            </>
          ) : (
            <p>User not found.</p>
          )}
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="edit-registered-user-form">
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">User Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              hidden

            />
          </div> */}

          <button type="submit" className="update-btn">Update Registered User</button>
        </form>
      </div>
    </>
  );
};

export default EditRegisteredUser;
