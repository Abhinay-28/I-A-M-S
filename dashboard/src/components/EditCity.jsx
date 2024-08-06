import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Sidebar from './Sidebar';
import './Editcity.css';

const EditCity = () => {
  const { cityListData, updateCity } = useAuth();
  const { cityId } = useParams(); // Extract cityId from the URL
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
    country: '',
    state: '',
    city: ''
  });

  useEffect(() => {
    // Fetch the city data based on cityId from cityListData
    const currentCity = cityListData.find(city => city._id === cityId);
    if (currentCity) {
      setFormData({
        id: currentCity._id,
        country: currentCity.country,
        state: currentCity.state,
        city: currentCity.city
      });
    }
  }, [cityId, cityListData]);

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
      const response = await fetch(`http://localhost:9998/api/city-id/${formData.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormData({
          id: '',
          country: '',
          state: '',
          city: ''
        });
        updateCity(formData); // Optionally update local state
        navigate('/city'); // Redirect to the city list page after updating the city
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
        <h2>Edit City</h2>

        {/* Display Container */}
        <div className="city-display-container">
          {formData.id ? (
            <>
              <h3>Current City Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>Country:</strong> {formData.country}</div>
              <div><strong>State:</strong> {formData.state}</div>
              <div><strong>City:</strong> {formData.city}</div>
            </>
          ) : (
            <p>City not found.</p>
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

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="update-btn">Update City</button>
        </form>
      </div>
    </>
  );
};

export default EditCity;
