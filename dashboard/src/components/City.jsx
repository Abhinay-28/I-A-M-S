import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './City.css'

const City = () => {
  const countryStateCityDistrictData = {
    "USA": {
      "Alabama": {
        "Birmingham": ["District 1", "District 2"],
        "Montgomery": ["District A", "District B"],
        "Mobile": ["District X", "District Y"]
      },
      "Alaska": {
        "Anchorage": ["District 1", "District 2"],
        "Juneau": ["District A", "District B"],
        "Fairbanks": ["District X", "District Y"]
      }
    },
    "India": {
      "Andhra Pradesh": {
        "Visakhapatnam": ["District 1", "District 2"],
        "Vijayawada": ["District A", "District B"],
        "Guntur": ["District X", "District Y"]
      },
      "Arunachal Pradesh": {
        "Itanagar": ["District 1", "District 2"],
        "Naharlagun": ["District A", "District B"],
        "Pasighat": ["District X", "District Y"]
      }
    },
    "Russia": {
      "Moscow Oblast": {
        "Moscow": ["District 1", "District 2"],
        "Zelenograd": ["District A", "District B"],
        "Khimki": ["District X", "District Y"]
      },
      "Saint Petersburg": {
        "Saint Petersburg": ["District 1", "District 2"],
        "Kolpino": ["District A", "District B"],
        "Pushkin": ["District X", "District Y"]
      }
    },
    "Germany": {
      "Bavaria": {
        "Munich": ["District 1", "District 2"],
        "Nuremberg": ["District A", "District B"],
        "Augsburg": ["District X", "District Y"]
      },
      "North Rhine-Westphalia": {
        "Cologne": ["District 1", "District 2"],
        "Dusseldorf": ["District A", "District B"],
        "Essen": ["District X", "District Y"]
      }
    },
    "Australia": {
      "New South Wales": {
        "Sydney": ["District 1", "District 2"],
        "Newcastle": ["District A", "District B"],
        "Wollongong": ["District X", "District Y"]
      },
      "Victoria": {
        "Melbourne": ["District 1", "District 2"],
        "Geelong": ["District A", "District B"],
        "Ballarat": ["District X", "District Y"]
      }
    }
  };

  const countries = Object.keys(countryStateCityDistrictData);

  const [formState, setFormState] = useState({
    country: '',
    state: '',
    district: '',
    city: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      ...(name === 'country' && { state: '', city: '', district: '' }),
      ...(name === 'state' && { city: '', district: '' }),
    }));
  };

  const handleCityInputChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9998/api/city', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormState({
          country: '',
          state: '',
          district: '',
          city: '',
        });
        navigate('/city');
        console.log("City data saved successfully");
      } else {
        console.log("Failed to save city data", response.status);
      }
    } catch (error) {
      console.error("Error saving city data:", error);
    }
  };

  return (
    <div className="city-container">
      <Sidebar className="sidebar" />
      <div className="content">
        <h2 className="heading">City</h2>
        <p className="description">This is the city selection page.</p>

        <form className="city-form" onSubmit={handleSubmit}>
          <select name="country" value={formState.country} onChange={handleChange} className="select-field">
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select name="state" value={formState.state} onChange={handleChange} disabled={!formState.country} className="select-field">
            <option value="">Select State</option>
            {formState.country &&
              Object.keys(countryStateCityDistrictData[formState.country]).map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
          </select>

          <select name="city" value={formState.city} onChange={handleChange} disabled={!formState.state} className="select-field">
            <option value="">Select City</option>
            {formState.country && formState.state &&
              Object.keys(countryStateCityDistrictData[formState.country][formState.state]).map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>

          <select name="district" value={formState.district} onChange={handleChange} disabled={!formState.city} className="select-field">
            <option value="">Select District</option>
            {formState.country && formState.state && formState.city &&
              countryStateCityDistrictData[formState.country][formState.state][formState.city].map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
          </select>

          <input
            type="text"
            name="city"
            value={formState.city}
            onChange={handleCityInputChange}
            placeholder="Enter city if not listed"
            className="input-field"
          />

          <button type="submit" className="submit-button">Save</button>
        </form>
      </div>
    </div>
  );
};

export default City;
