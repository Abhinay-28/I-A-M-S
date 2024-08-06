import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Sidebar from './Sidebar';
import './editstate.css';

const EditState = () => {
  const { stateListData, updateState } = useAuth();
  const { stateId } = useParams(); // Extract stateId from the URL
  const navigate = useNavigate();

  const countryStateData = {
    USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut'],
    Canada: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador'],
    India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat'],
    //... (Other countries)
  };

  const countries = Object.keys(countryStateData);

  const [formData, setFormData] = useState({
    id: '',
    state: '',
    country: ''
  });

  useEffect(() => {
    // Fetch the state data based on stateId from stateListData
    const currentState = stateListData.find(state => state._id === stateId);
    if (currentState) {
      setFormData({
        id: currentState._id,
        state: currentState.state,
        country: currentState.country
      });
    }
  }, [stateId, stateListData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'country' && { state: '' }) // Reset state if country changes
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9998/api/state-id/${formData.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormData({
          id: '',
          state: '',
          country: ''
        });
        updateState(formData); // Optionally update local state
        navigate('/state'); // Redirect to the state list page after updating the state
      } else {
        console.error('Update failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Get states based on selected country
  const states = formData.country ? countryStateData[formData.country] : [];

  return (
    <>
      <Sidebar />
      <div className="edit-state-container">
        <h2 className='head'></h2>

        {/* Display Container */}
        <div className="state-display-container">
          {formData.id ? (
            <>
              <h3>Current State Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>State:</strong> {formData.state}</div>
              <div><strong>Country:</strong> {formData.country}</div>
            </>
          ) : (
            <p>State not found.</p>
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
              disabled={!formData.country}
            >
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="update-btn">Update State</button>
        </form>
      </div>
    </>
  );
};

export default EditState;
