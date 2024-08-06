import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth'; // Ensure this path is correct for your project
import Sidebar from './Sidebar';
import './editpersonname.css';

// Example options for dropdowns
const countryOptions = ['USA', 'Canada', 'India']; // Add more countries as needed
const stateOptions = {
  USA: ['California', 'Texas', 'New York'],
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
  India: ['Maharashtra', 'Karnataka', 'Delhi']
}; // Add more states as needed
const districtOptions = {
  California: ['Los Angeles', 'San Francisco'],
  Texas: ['Houston', 'Dallas'],
  // Add more states and districts as needed
};
const cityOptions = {
  'Los Angeles': ['Downtown', 'Hollywood'],
  'San Francisco': ['Mission District', 'Castro'],
  // Add more districts and cities as needed
};
const pincodeOptions = {
  'Downtown': ['90001', '90002'],
  'Hollywood': ['90004', '90005'],
  // Add more cities and pincodes as needed
};

const EditPersonName = () => {
  const { nameListData, updatePersonName } = useAuth();
  const { personId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    names: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    country: '',
    state: '',
    city: '',
    district: '',
    pincode: ''
  });

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [pincodes, setPincodes] = useState([]);

  useEffect(() => {
    const currentPerson = nameListData.find(person => person._id === personId);
    if (currentPerson) {
      setFormData({
        id: currentPerson._id,
        names: currentPerson.names,
        email: currentPerson.email,
        password: currentPerson.password,
        phone: currentPerson.phone,
        address: currentPerson.address,
        country: currentPerson.country,
        state: currentPerson.state,
        city: currentPerson.city,
        district: currentPerson.district,
        pincode: currentPerson.pincode
      });

      setStates(stateOptions[currentPerson.country] || []);
      setDistricts(districtOptions[currentPerson.state] || []);
      setCities(cityOptions[currentPerson.district] || []);
      setPincodes(pincodeOptions[currentPerson.city] || []);
    }
  }, [personId, nameListData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'country') {
      setStates(stateOptions[value] || []);
      setDistricts([]);
      setCities([]);
      setPincodes([]);
    }

    if (name === 'state') {
      setDistricts(districtOptions[value] || []);
      setCities([]);
      setPincodes([]);
    }

    if (name === 'district') {
      setCities(cityOptions[value] || []);
      setPincodes([]);
    }

    if (name === 'city') {
      setPincodes(pincodeOptions[value] || []);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9998/api/name-id/${formData.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormData({
          id: '',
          names: '',
          email: '',
          password: '',
          phone: '',
          address: '',
          country: '',
          state: '',
          city: '',
          district: '',
          pincode: ''
        });
        updatePersonName(formData); // Optionally update local state
        navigate('/person-name'); // Redirect to the person name list page after updating
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
        <h2>Edit Person Name</h2>

        {/* Display Container */}
        <div className="person-name-display-container">
          {formData.id ? (
            <>
              <h3>Current Person Name Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>Name:</strong> {formData.names}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Password:</strong> {formData.password}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>Address:</strong> {formData.address}</div>
              <div><strong>Country:</strong> {formData.country}</div>
              <div><strong>State:</strong> {formData.state}</div>
              <div><strong>City:</strong> {formData.city}</div>
              <div><strong>District:</strong> {formData.district}</div>
              <div><strong>Pincode:</strong> {formData.pincode}</div>
            </>
          ) : (
            <p>Person not found.</p>
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
            <label htmlFor="names">Name:</label>
            <input
              type="text"
              id="names"
              name="names"
              value={formData.names}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
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
              {countryOptions.map((country, index) => (
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
            <select className=''
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            >
              <option  value="">Select a pincode</option>
              {pincodes.map((pincode, index) => (
                <option key={index} value={pincode}>
                  {pincode}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="update-btn">Update Person Name</button>
        </form>
      </div>
    </>
  );
};

export default EditPersonName;
