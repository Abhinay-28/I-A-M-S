import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate,Link } from 'react-router-dom';
import './CountryView.css';
import Sidebar from './Sidebar';
import { useAuth } from '../store/auth';


const CountryView = () => {
  const { countryListData } = useAuth();
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    if (countryListData && Array.isArray(countryListData)) {
      setCountryList(countryListData);
    }
  }, [countryListData]);

  const navigate = useNavigate();

  const handleAddCountry = () => {
    navigate('/country-view');
  };

  const handleDeleteCountry = (countryId) => {
    setCountryList(countryList.filter(country => country._id !== countryId));
  };

  const handleEditCountry = () => {
    // navigate(`/edit-country/${country._id}`);
    
  };

  return (
    <>
      <div className='sidebarcountryview'>
        <Sidebar />
      </div>

      <div className="countryview-container">
        <div className='headingCV'>
          <h2></h2>
        </div>
        
        <button onClick={handleAddCountry} className="add-btn">Add New Country</button>

        <table className="countryview-table">
          <thead>
            <tr>
              <th>ID  </th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {countryList.length > 0 ? (
              countryList.map((country) => (
                <tr key={country._id}>
                  <td>{country._id}</td>
                  <td>{country.country}</td> {/* Access the specific property you want to display */}
                  <td>
                    <button onClick={() => handleDeleteCountry(country._id)} className="countryview-delete-btn">Delete</button>
                   <Link to={`/edit-country/${country._id}`}> <button className="countryview-edit-btn" onClick={ handleEditCountry}>Edit</button></Link>  
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No countries available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryView;
