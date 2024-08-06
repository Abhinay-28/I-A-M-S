import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './PersonNameView.css';
import Sidebar from './Sidebar';
import { useAuth } from '../store/auth';

const PersonNameView = () => {
  const { nameListData } = useAuth();
  const [persons, setPersons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (nameListData && Array.isArray(nameListData)) {
      setPersons(nameListData);
    }
  }, [nameListData]);

  const handleAddPerson = () => {
    navigate('/person-name-view');
  };

  const handleEdit = (index) => {
    console.log('Edit person clicked', persons[index]);
    navigate('/person-name-edit');
  };

  const handleDelete = (index) => {
    const updatedPersons = persons.filter((_, i) => i !== index);
    setPersons(updatedPersons);
    // Optionally, you could send a request to your API to delete the person
  };

  return (
    <>
      <div><Sidebar /></div>
      <div className="personnameview-container">
        <button onClick={handleAddPerson} className="button">Add Person</button>
        <div className="headingNV">
          <h2>Person List</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              
              <th>Password</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>District</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index}>
                <td>{person.names}</td>
                <td>{person._id}</td>
                
                <td>{person.password}</td>
                <td>{person.phone}</td>
                <td>{person.address}</td>
                <td>{person.country}</td>
                <td>{person.state}</td>
                <td>{person.city}</td>
                <td>{person.district}</td>
                <td>{person.pincode}</td>
                <td>
                <Link to={`/person-name-edit/${person._id}`}> <button>Edit</button></Link>  
                <br />
          <br />
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PersonNameView;
