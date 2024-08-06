// import React, { useState } from 'react';
// import './Newuser.css';
// import {  useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import { div } from 'three/examples/jsm/nodes/Nodes.js';

// const NewUser = ({ addUser }) => {
//     const [userName, setUserName] = useState('');
//     const [userEmail, setUserEmail] = useState('');
//     const [userPincode, setUserPincode] = useState('');
//     const navigate =  useNavigate();

    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newUserNo = Date.now(); // Unique user number
//         const newUser = {
//           userNo: newUserNo,
//           userName,
//           userEmail,
//           userPincode,
//         };
//         addUser(newUser);
//         navigate('/users'); // Redirect to the view page
//       };

//   return (

//     <>

//     <div><Sidebar/></div>
//      <div className="new-user-container">
//         {/* <div> <Sidebar/></div> */}
       
//       <h2>Create New User</h2>
//       <form onSubmit={handleSubmit} className="new-user-form">
//         <div className="form-group">
//           <label htmlFor="userName">User Name:</label>
//           <input
//             type="text"
//             id="userName"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="userEmail">User Email:</label>
//           <input
//             type="email"
//             id="userEmail"
//             value={userEmail}
//             onChange={(e) => setUserEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="userPincode">User Pincode:</label>
//           <input
//             type="text"
//             id="userPincode"
//             value={userPincode}
//             onChange={(e) => setUserPincode(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">Create User</button>
//       </form>
//     </div>
//     </>
    
   
//   );
// };

// export default NewUser;


import React, { useState } from 'react';
import './Newuser.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const NewUser = ({ addUser }) => {
  const [formData, setFormData] = useState({
    UserNo:'',
    UserName:'',
    UserEmail:'',
    Created_by:'',
    
    UserPincode: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserNo = Date.now(); // Unique user number
    const newUser = {
      userNo: newUserNo,
      ...formData
    };
    addUser(newUser);
    try {
      const response = await fetch('http://localhost:9998/api/member',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(formData)
      })
      if(response.ok){
        const res_data = await response.json()
        console.log(res_data)
        
        setFormData({
          UserNo:'',
          UserName:'',
          UserEmail:'',
          Created_by:'',
          
          UserPincode: ''
          
        })
        navigate('/users'); //
      }
      console.log("errrrrrr")
    } catch (error) {
      console.log("state",error)
    }
    
    
  };

  return (
    <>
      <div><Sidebar /></div>
      <div className="new-user-container">
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit} className="new-user-form">


        <div className="form-group">
            <label htmlFor="userNo">User No:</label>
            <input
              type="text"
              id="userNo"
              name="UserNo"
              value={formData.UserNo}
              onChange={handleChange}
              
            />
          </div>


          <div className="form-group">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">User Email:</label>
            <input
              type="email"
              id="userEmail"
              name="UserEmail"
              value={formData.UserEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Created_by:</label>
            <input
              type="text"
              id="userEmail"
              name="Created_by"
              value={formData.Created_by}
              onChange={handleChange}
              required
            />
          </div>




          <div className="form-group">
            <label htmlFor="userPincode">User Pincode:</label>
            <input
              type="text"
              id="UserPincode"
              name="UserPincode"
              value={formData.UserPincode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Create User</button>
        </form>
      </div>
    </>
  );
};

export default NewUser;
