import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './DistrictView.css'; // Import the CSS file
import Sidebar from './Sidebar';
import { useAuth } from '../store/auth';

const DistrictView = () => {
  const { districtListData } = useAuth();
  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (districtListData && Array.isArray(districtListData)) {
      setDistricts(districtListData);
    }
  }, [districtListData]);

  const handleAddDistrict = () => {
    navigate('/district-view');
  };

  const handleDelete = (index) => {
    const updatedDistricts = districts.filter((_, i) => i !== index);
    setDistricts(updatedDistricts);
    // Optionally, you could send a request to your API to delete the district
  };

  const handleEdit = () => {
    navigate('/edit-district');
  };

  return (
    <>
      <div className='sidebardistrictview'>
        <Sidebar/>
      </div>
      
      <div className="districtview-container">
        <div className='headingDV'><h2>District View</h2></div>
        
        <button onClick={handleAddDistrict} className="districtview-btn">Add District</button>

        <table className="districtview-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>District</th>
              {/* <th>City</th> */}
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((districtData, index) => (
              <tr key={index}>
                <td>{districtData._id}</td>
                <td>{districtData.district}</td>
                {/* <td>{districtData.city}</td> */}
                <td>{districtData.state}</td>
                <td>{districtData.country}</td>
                <td>
                <Link to={`/edit-district/${districtData._id}`}> <button className='editbtn'>Edit</button></Link>  
                  <button onClick={() => handleDelete(index)} className="districtview-table-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DistrictView;
