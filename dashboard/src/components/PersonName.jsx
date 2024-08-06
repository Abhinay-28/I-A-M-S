import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './PersonNameView.css'

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
  }
};

const PersonName = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    country: '',
    state: '',
    city: '',
    district: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      ...(name === 'country' && { state: '', city: '', district: '', pincode: '' }),
      ...(name === 'state' && { city: '', district: '', pincode: '' }),
      ...(name === 'city' && { district: '', pincode: '' }),
      ...(name === 'district' && { pincode: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9998/api/personName', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);

        setFormData({
          names: '',
          email: '',
          password: '',
          phone: '',
          address: '',
          country: '',
          state: '',
          city: '',
          district: '',
          pincode: '',
        });
        navigate('/person-name');
      } else {
        console.error("Failed to save data", response.status);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (

    <>

    <div><Sidebar/></div>

<div className="modal">
      <form onSubmit={handleSubmit} className="form-group">
        <label>
          names:
          <input type="text" name="names" value={formData.names} onChange={handleChange} required />
        </label>
        
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        
        <label>
          Country:
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            {Object.keys(countryStateCityDistrictData).map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </label>
        
        <label>
          State:
          <select name="state" value={formData.state} onChange={handleChange} disabled={!formData.country} required>
            <option value="">Select State</option>
            {formData.country && Object.keys(countryStateCityDistrictData[formData.country]).map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </label>
        
        <label>
          City:
          <select name="city" value={formData.city} onChange={handleChange} disabled={!formData.state} required>
            <option value="">Select City</option>
            {formData.country && formData.state && Object.keys(countryStateCityDistrictData[formData.country][formData.state]).map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </label>
        
        <label>
          District:
          <select name="district" value={formData.district} onChange={handleChange} disabled={!formData.city} required>
            <option value="">Select District</option>
            {formData.country && formData.state && formData.city &&
              countryStateCityDistrictData[formData.country][formData.state][formData.city].map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
          </select>
        </label>
        
        <label>
          Pincode:
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </label>
        
        <button onClick={handleSubmit} type="submit">Save</button>
        <button type="submit" onClick={() => navigate('/person-name-view')}>Cancel</button>
      </form>
    </div>


    </>
    
  );
};

export default PersonName;
