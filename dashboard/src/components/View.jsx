import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth'; // Adjust the import path if necessary
import Sidebar from './Sidebar';
import './View.css';

const View = () => {
  const { memberListData, deleteUser } = useAuth();
  const [selectedPincode, setSelectedPincode] = useState('');

  // Function to filter users based on selected pincode
  const filteredUsers = selectedPincode 
    ? memberListData.filter(user => String(user.UserPincode).includes(selectedPincode))
    : memberListData;

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className='ViewMain'>



      <div className="user-table">
        <h2>Member Table</h2>
        <br />
        <div>
          <label htmlFor="pincode">Filter by Pincode: </label>
          <input 
            type="text" 
            id="pincode" 
            value={selectedPincode} 
            onChange={(e) => setSelectedPincode(e.target.value)} 
            placeholder="Enter pincode" 
          />
        </div>
        <br />
        <button className="add-user-btn">
          <Link to="/newuser">Add User</Link>
        </button>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Pincode</th>
              <th>Created_by</th>
              <th>Edited_by</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers && filteredUsers.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.UserName}</td>
                <td>{user.UserEmail}</td>
                <td>{user.UserPincode}</td>
                <td>{user.Created_by}</td>
                <td>{user.Edited_by}</td>
                <td>
                  <button 
                    
                    className="edit-user-btn">
                    <Link to={`/edituser/${user._id}`}>Edit</Link>
                  </button>
                  <button  onClick={() => deleteUser(user._id)} className="delete-user-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    </>
  );
};

export default View;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../store/auth'; // Adjust the import path if necessary
// import Sidebar from './Sidebar';
// import './View.css';

// const View = () => {
//   const { memberListData, deleteUser } = useAuth();
//   const [selectedCity, setSelectedCity] = useState('');

//   // Function to filter users based on selected city
//   const filteredUsers = selectedCity 
//     ? memberListData.filter(user => user.UserCity === selectedCity)
//     : memberListData;

//   return (
//     <>
//       <div>
//         <Sidebar />
//       </div>

//       <div className="user-table">
//         <h2>User Table</h2>
//         <div>
//           <label htmlFor="city">Filter by City: </label>
//           <input 
//             type="text" 
//             id="city" 
//             value={selectedCity} 
//             onChange={(e) => setSelectedCity(e.target.value)} 
//             placeholder="Enter city name" 
//           />
//         </div>
//         <button className="add-user-btn">
//           <Link to="/newuser">Add User</Link>
//         </button>
//         <table>
//           <thead>
//             <tr>
//               <th>User Id</th>
//               <th>User Name</th>
//               <th>User Email</th>
//               <th>User Pincode</th>
//               <th>User City</th>
//               <th>Created_by</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers && filteredUsers.map(user => (
//               <tr key={user._id}>
//                 <td>{user._id}</td>
//                 <td>{user.UserName}</td>
//                 <td>{user.UserEmail}</td>
//                 <td>{user.UserPincode}</td>
//                 <td>{user.UserCity}</td>
//                 <td>{user.Created_by}</td>
//                 <td>
//                   <button 
//                     onClick={() => deleteUser(user.UserNo)} 
//                     className="delete-user-btn">
//                     Delete User
//                   </button>
//                   <button className="edit-user-btn">
//                     <Link to={`/edituser/${user._id}`}>Edit User</Link>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default View;
