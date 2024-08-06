import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Sidebar from './Sidebar';
import './editcountry.css'; // Assuming you save the CSS file as EditCountry.css

const EditCountry = () => {
  const { countryListData, updateCountry } = useAuth();
  const { countryId } = useParams(); // Extract countryId from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    country: ''
  });

  useEffect(() => {
    // Fetch the country data based on countryId from countryListData
    const currentCountry = countryListData.find(country => country._id === countryId);
    if (currentCountry) {
      setFormData({
        id: currentCountry._id,
        country: currentCountry.country
      });
    }
  }, [countryId, countryListData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9998/api/country-id/${formData.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormData({
          id: '',
          country: ''
        });
        updateCountry(formData); // Optionally update local state
        navigate('/country'); // Redirect to the country list page after updating the country
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
      <div className="edit-state-container">
        <h2>Edit Country</h2>

        {/* Display Container */}
        <div className="country-display-container">
          {formData.id ? (
            <>
              <h3>Current Country Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>Country:</strong> {formData.country}</div>
            </>
          ) : (
            <p>Country not found.</p>
          )}
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="edit-state-form">
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
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="update-btn">Update Country</button>
        </form>
      </div>
    </>
  );
};

export default EditCountry;
