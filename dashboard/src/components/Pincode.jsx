import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const countryStateCityDistrictData = {
  "USA": {
    "Alabama": {
      "Birmingham": ["12345", "12346"],
      "Montgomery": ["12347", "12348"]
    },
    "Alaska": {
      "Anchorage": ["12349", "12350"],
      "Juneau": ["12351", "12352"]
    }
  },
  "India": {
    "Andhra Pradesh": {
      "Visakhapatnam": ["530001", "530002"],
      "Vijayawada": ["520001", "520002"]
    },
    "Arunachal Pradesh": {
      "Itanagar": ["791111", "791112"],
      "Naharlagun": ["791113", "791114"]
    }
  },
  "Russia": {
    "Moscow Oblast": {
      "Moscow": ["101000", "101001"],
      "Zelenograd": ["124500", "124501"]
    },
    "Saint Petersburg": {
      "Saint Petersburg": ["190000", "190001"],
      "Kolpino": ["196640", "196641"]
    }
  },
  "Germany": {
    "Bavaria": {
      "Munich": ["80331", "80333"],
      "Nuremberg": ["90402", "90403"]
    },
    "North Rhine-Westphalia": {
      "Cologne": ["50667", "50668"],
      "Dusseldorf": ["40210", "40211"]
    }
  },
  "Australia": {
    "New South Wales": {
      "Sydney": ["2000", "2001"],
      "Newcastle": ["2300", "2301"]
    },
    "Victoria": {
      "Melbourne": ["3000", "3001"],
      "Geelong": ["3220", "3221"]
    }
  }
};

const Pincode = () => {
  const navigate = useNavigate();
  
  const [selection, setSelection] = useState({
    country: '',
    state: '',
    city: '',
    district: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelection(prevSelection => ({
      ...prevSelection,
      [name]: value,
      ...(name === 'country' && { state: '', city: '', district: '', pincode: '' }),
      ...(name === 'state' && { city: '', district: '', pincode: '' }),
      ...(name === 'city' && { district: '', pincode: '' }),
      ...(name === 'district' && { pincode: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let savedStates = JSON.parse(localStorage.getItem('pincodes')) || [];
    // savedStates.push(selection);
    // localStorage.setItem('pincodes', JSON.stringify(savedStates));


    try {
      const response = await fetch('http://localhost:9998/api/pincode',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(selection)
      })
      if(response.ok){
        const res_data = await response.json()
        console.log(res_data)
        
        setSelection({
          country: '',
    state: '',
    city: '',
    district: '',
    pincode: ''
          
        })
        navigate('/pincode');
      }
      console.log("errrrrrr")
    } catch (error) {
      console.log("state",error)
    }
    





  
  };

  return (
    <>
      <Sidebar />
      <div>
        <h2>Pincode</h2>
        <p className="para">This is the pincode selection page</p>

        <form onSubmit={handleSubmit} className="form">
          {/* Country dropdown */}
          <select name="country" value={selection.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {Object.keys(countryStateCityDistrictData).map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          

          {/* State dropdown */}
          <select name="state" value={selection.state} onChange={handleChange} disabled={!selection.country}>
            <option value="">Select State</option>
            {selection.country && Object.keys(countryStateCityDistrictData[selection.country]).map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          

          {/* City dropdown */}
          <select name="city" value={selection.city} onChange={handleChange} disabled={!selection.state}>
            <option value="">Select City</option>
            {selection.country && selection.state && Object.keys(countryStateCityDistrictData[selection.country][selection.state]).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          

          {/* District dropdown */}
          <select name="district" value={selection.district} onChange={handleChange} disabled={!selection.city}>
            <option value="">Select District</option>
            {selection.country && selection.state && selection.city && Object.keys(countryStateCityDistrictData[selection.country][selection.state][selection.city]).map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
          

          {/* Pincode input */}
          <input type="text" name="pincode" value={selection.pincode} onChange={handleChange} placeholder='Enter pincode' />
          

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default Pincode;
