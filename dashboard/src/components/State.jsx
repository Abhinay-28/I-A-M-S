import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './State.css';

const City = () => {
  // Sample data for countries, states, and cities
  const countryStateCityData = {
    USA: {
      Alabama: ['Birmingham', 'Mobile'],
      Alaska: ['Anchorage', 'Juneau', 'Fairbanks'],
      California: ['Los Angeles', 'San Francisco', 'San Diego'],
      Texas: ['Houston', 'Dallas', 'Austin'],
      New_York: ['Buffalo', 'Rochester'],
      // ... add more states and cities as needed
    },
    India: {
      'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur'],
      'Arunachal Pradesh': ['Itanagar', 'Pasighat'],
      'Maharashtra': ['Mumbai', 'Nagpur'],
      'Karnataka': ['Bangalore', 'Mysore'],
      'Tamil Nadu': ['Chennai', 'Madurai'],
      // ... add more states and cities as needed
    },
    Russia: {
      'Moscow Oblast': ['Moscow', 'Khimki'],
      'Saint Petersburg': ['Kolpino', 'Pushkin'],
      'Novosibirsk Oblast': ['Novosibirsk', 'Berdsk'],
      'Sverdlovsk Oblast': ['Yekaterinburg', 'Kamensk-Uralsky'],
      'Krasnodar Krai': ['Krasnodar', 'Sochi'],
      // ... add more states and cities as needed
    },
    Australia: {
      'New South Wales': ['Sydney', 'Newcastle'],
      'Victoria': ['Melbourne', 'Geelong'],
      'Queensland': ['Brisbane', 'Cairns'],
      'Western Australia': ['Perth', 'Fremantle'],
      'South Australia': ['Adelaide', 'Whyalla'],
      // ... add more states and cities as needed
    },
    Germany: {
      Bavaria: ['Munich', 'Augsburg'],
      'North Rhine-Westphalia': ['Cologne', 'Dortmund'],
      Berlin: ['Berlin'],
      Hamburg: ['Hamburg'],
      Hesse: ['Frankfurt', 'Kassel'],
      // ... add more states and cities as needed
    }
    // ... add more countries, states, and cities
  };

  const countries = Object.keys(countryStateCityData);

  const [formState, setFormState] = useState({
    country: '',
    state: '',
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
      ...(name === 'country' && { state: '' }),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9998/api/state', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormState({
          country: '',
          state: '',
        });
        navigate('/state');
      } else {
        console.log("Error saving state");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='containerS'>
        <h2 className='heading'></h2>
        <p className='para'>This is the state selection page.</p>

        <br /><br />
        

        <form className='formS' onSubmit={handleSubmit}>
          {/* Country dropdown */}
          <select
            onChange={handleChange}
            name="country"
            value={formState.country}
            className='form-select'
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <br />

          {/* State input field */}
          <input
            type="text"
            name="state"
            onChange={handleChange}
            value={formState.state}
            placeholder="Enter State"
            className='form-input'
          />
          <br />

          {/* Save button */}
          <button type="submit" className='form-button'>Save</button>
        </form>
      </div>
    </>
  );
};

export default City;
