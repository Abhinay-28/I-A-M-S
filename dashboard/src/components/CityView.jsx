import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './CityView.css'; // Import the CSS file
import Sidebar from './Sidebar';
import { useAuth } from '../store/auth';

const CityView = () => {
  const { cityListData } = useAuth();
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cityListData && Array.isArray(cityListData)) {
      setCities(cityListData);
    }
  }, [cityListData]);

  const handleAddCity = () => {
    navigate('/city-view');
  };

  const handleDelete = (index) => {
    const updatedCities = cities.filter((_, i) => i !== index);
    setCities(updatedCities);
    // Optionally, you could send a request to your API to delete the city
  };

  const handleEditCity = (index) => {
    console.log('Edit city clicked', cities[index]);
    navigate('/edit-city');
  };

  return (
    <>
      <div className='sidebarcityview'>
        <Sidebar/>
      </div>
      
      <div className="cityview-container">
        <div className='headingCV'><h2>City View</h2></div>
        
        <button onClick={handleAddCity} className="cityview-btn">Add City</button>

        <table className="cityview-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((cityData, index) => (
              <tr key={index}>
                <td>{cityData._id}</td>
                <td>{cityData.city}</td>
                <td>{cityData.state}</td>
                <td>{cityData.country}</td>
                <td>
                <Link to={`/edit-city/${cityData._id}`}> <button className='editbtn'>Edit</button></Link>  
                  <button onClick={() => handleDelete(index)} className="cityview-table-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CityView;
