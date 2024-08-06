import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Sidebar from './Sidebar';
import './editdistrictview.css';

const EditDistrict = () => {
  const { districtListData, updateDistrict } = useAuth();
  const { districtId } = useParams(); // Extract districtId from the URL
  const navigate = useNavigate();

  const countryStateData = {
    USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut'],
    Canada: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador'],
    India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat']
    // Add more countries and states as needed
  };

  const countries = Object.keys(countryStateData);

  const [formData, setFormData] = useState({
    id: '',
    district: '',
    state: '',
    country: ''
  });

  useEffect(() => {
    // Fetch the district data based on districtId from districtListData
    const currentDistrict = districtListData.find(district => district._id === districtId);
    if (currentDistrict) {
      setFormData({
        id: currentDistrict._id,
        district: currentDistrict.district,
        state: currentDistrict.state,
        country: currentDistrict.country
      });
    }
  }, [districtId, districtListData]);

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
      const response = await fetch(`http://localhost:9998/api/district-id/${formData.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormData({
          id: '',
          district: '',
          state: '',
          country: ''
        });
        updateDistrict(formData); // Optionally update local state
        navigate('/district'); // Redirect to the district list page after updating the district
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
        <h2>Edit District</h2>

        {/* Display Container */}
        <div className="district-display-container">
          {formData.id ? (
            <>
              <h3>Current District Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>District:</strong> {formData.district}</div>
              <div><strong>State:</strong> {formData.state}</div>
              <div><strong>Country:</strong> {formData.country}</div>
            </>
          ) : (
            <p>District not found.</p>
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select a state</option>
              {formData.country && countryStateData[formData.country].map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="update-btn">Update District</button>
        </form>
      </div>
    </>
  );
};

export default EditDistrict;
