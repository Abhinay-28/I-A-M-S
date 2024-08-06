import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './PincodeView.css';
import Sidebar from './Sidebar';
import { useAuth } from '../store/auth';

const PincodeView = () => {
  const { pincodeListData } = useAuth();
  const [pincodeData, setPincodeData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (pincodeListData && Array.isArray(pincodeListData)) {
      setPincodeData(pincodeListData);
    }
  }, [pincodeListData]);

  const handleAdd = () => {
    navigate('/pincode-view');
  };

  const handleEdit = (index) => {
    console.log('Edit pincode clicked', pincodeData[index]);
    navigate('/pincode-edit');
  };

  const handleDelete = (index) => {
    const updatedPincodeData = pincodeData.filter((_, i) => i !== index);
    setPincodeData(updatedPincodeData);
    // Optionally, you could send a request to your API to delete the pincode
  };

  return (
    <>
      <div><Sidebar /></div>
      <div className="pincodeview-container">
        <button onClick={handleAdd} className="pincodeview-btn">Add New Pincode</button>
        <div className="headingPV">
          <h2>Pincode View</h2>
        </div>
        <table className="pincodeview-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>District</th>
              <th>Pincode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pincodeData.map((data, index) => (
              <tr key={index}>
                <td>{data._id}</td>
                <td>{data.country}</td>
                <td>{data.state}</td>
                <td>{data.city}</td>
                <td>{data.district}</td>
                <td>{data.pincode}</td>
                <td>
                <Link to={`/pincode-edit/${data._id}`}> <button className='editbutton'>Edit</button></Link>  
                  <button className='deletebutton' onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PincodeView;
