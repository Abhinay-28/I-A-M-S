import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StateView.css';  // Import the CSS file
import Sidebar from './Sidebar';
import { useAuth } from '../store/auth';

const StateView = () => {
  const { stateListData } = useAuth();
  const [states, setStates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (stateListData && Array.isArray(stateListData)) {
      setStates(stateListData);
    }
  }, [stateListData]);

  const handleAddState = () => {
    navigate('/state-view');
  };

  const handleDelete = (index) => {
    const updatedStates = states.filter((_, i) => i !== index);
    setStates(updatedStates);
    // Optionally, you could send a request to your API to delete the state
  };

  const handleEdit = () => {
    navigate('/edit-state');
  }

  return (
    <>
      <div className='sidebarstateview'>
        <Sidebar/>
      </div>
      
      <div className="stateview-container">
        <div className='headingSV'><h2>State View</h2></div>
        
        <button onClick={handleAddState} className="stateview-btn">Add State</button>
       
        <table className="stateview-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {states.map((stateData, index) => (
              <tr key={index}>
                <td>{stateData._id}</td>
          
                <td>{stateData.state}</td>
                <td>{stateData.country}</td>
                <td>
                <Link to={`/edit-state/${stateData._id}`}> <button className='stateview-table-button' onClick={ handleEdit}>Edit</button></Link>  
                  <button onClick={() => handleDelete(index)} className="delbtn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StateView;
