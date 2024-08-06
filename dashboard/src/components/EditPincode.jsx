import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import Sidebar from './Sidebar';
import './EditPincode.css'; // Assuming you have corresponding CSS

const EditPincode = () => {
  const { pincodeListData, updatePincode } = useAuth();
  const { pincodeId } = useParams(); // Extract pincodeId from the URL
  const navigate = useNavigate();

  const countryStateData = {
    USA: {
      Alabama: ['Birmingham', 'Montgomery'],
      California: ['Los Angeles', 'San Francisco']
      // Add more states and cities as needed
    },
    Canada: {
      Alberta: ['Calgary', 'Edmonton'],
      British_Columbia: ['Vancouver', 'Victoria']
      // Add more states and cities as needed
    },
    India: {
      Andhra_Pradesh: ['Visakhapatnam', 'Vijayawada'],
      Maharashtra: ['Mumbai', 'Pune']
      // Add more states and cities as needed
    }
  };

  const [formData, setFormData] = useState({
    id: '',
    country: '',
    state: '',
    district: '',
    city: '',
    pincode: ''
  });

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [pincodes, setPincodes] = useState([]);

  useEffect(() => {
    // Fetch the pincode data based on pincodeId from pincodeListData
    const currentPincode = pincodeListData.find(pincode => pincode._id === pincodeId);
    if (currentPincode) {
      setFormData({
        id: currentPincode._id,
        country: currentPincode.country,
        state: currentPincode.state,
        district: currentPincode.district,
        city: currentPincode.city,
        pincode: currentPincode.pincode
      });
      setStates(Object.keys(countryStateData[currentPincode.country] || {}));
      setDistricts(countryStateData[currentPincode.country][currentPincode.state] || []);
      setCities(countryStateData[currentPincode.country][currentPincode.state] || []);
      // Optionally, fetch pincodes if you have a list for them
    }
  }, [pincodeId, pincodeListData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'country') {
      setStates(Object.keys(countryStateData[value] || {}));
      setDistricts([]);
      setCities([]);
      setPincodes([]);
    }

    if (name === 'state') {
      setDistricts(countryStateData[formData.country][value] || []);
      setCities([]);
      setPincodes([]);
    }

    if (name === 'district') {
      setCities(countryStateData[formData.country][formData.state] || []);
      setPincodes([]);
    }

    if (name === 'city') {
      // Fetch pincode options if you have a list or logic for them
      setPincodes([]); // Example: setPincodes(fetchPincodes(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9998/api/pincode-id/${formData.id}`, {
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
          district: '',
          city: '',
          pincode: ''
        });
        updatePincode(formData); // Optionally update local state
        navigate('/pincode'); // Redirect to the pincode list page after updating
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
        <h2>Edit Pincode</h2>

        {/* Display Container */}
        <div className="pincode-display-container">
          {formData.id ? (
            <>
              <h3>Current Pincode Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>Country:</strong> {formData.country}</div>
              <div><strong>State:</strong> {formData.state}</div>
              <div><strong>District:</strong> {formData.district}</div>
              <div><strong>City:</strong> {formData.city}</div>
              <div><strong>Pincode:</strong> {formData.pincode}</div>
            </>
          ) : (
            <p>Pincode not found.</p>
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
              {Object.keys(countryStateData).map((country, index) => (
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
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="district">District:</label>
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select a district</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pincode">Pincode:</label>
            <select
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            >
              <option value="">Select a pincode</option>
              {pincodes.map((pincode, index) => (
                <option key={index} value={pincode}>
                  {pincode}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="update-btn">Update Pincode</button>
        </form>
      </div>
    </>
  );
};

export default EditPincode;
