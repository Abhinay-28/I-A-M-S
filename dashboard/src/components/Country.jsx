import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Country.css';

const Country = ({ onAddCountry }) => {
  const [country, setCountry] = useState({ country: '' });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setCountry({ country: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (country.country) {
      onAddCountry(country.country);

      try {
        const response = await fetch('http://localhost:9998/api/country', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(country)
        });

        if (response.ok) {
          const res_data = await response.json();
          console.log(res_data);
          setCountry({ country: '' });
          navigate('/country');
          console.log("Country saved successfully");
        } else {
          console.log("Failed to save country", response.status);
        }
      } catch (error) {
        console.error("Error saving country:", error);
      }
    }
  };

  return (
    <>
      <Sidebar />
      <div className="country-container">
        <h2 className="country-heading">Add New Country</h2>
        <p className="country-description">Use the form below to add a new country to the list.</p>
        <form className="country-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="country" className="form-label">Country Name:</label>
            <input
              id="country"
              name='country'
              type="text"
              value={country.country}
              onChange={handleInput}
              className="form-input"
              placeholder="Enter country name"
              required
            />
          </div>
          <button type="submit" className="form-button">Save</button>
        </form>
      </div>
    </>
  );
};

export default Country;
