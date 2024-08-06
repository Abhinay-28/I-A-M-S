// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './Edituser.css';
// import { useAuth } from '../store/auth'; 
// import Sidebar from './Sidebar';

// const EditUser = () => {
//   const { memberListData, updateUser } = useAuth();
//   const { _id } = useParams(); // Assuming userNo is passed as a parameter in the URL
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     id: '',
//     UserNo: '',
//     UserName: '',
//     UserEmail: '',
//     UserPincode: ''
//   });

//   useEffect(() => {
//     // Fetch the user data based on userNo from memberListData
//     const memberListDataString = JSON.stringify(memberListData)
//     console.log(memberListDataString)
//     const memberArray =  memberListDataString.split(',');
//     console.log(memberArray)
//     const currentUser = memberArray.find(user => user._id === parseInt(_id));
//     console.log(currentUser)
//     if (currentUser) {
//       setFormData({
//         id: currentUser.id,
//         UserNo: currentUser.UserNo,
//         UserName: currentUser.UserName,
//         UserEmail: currentUser.UserEmail,
//         UserPincode: currentUser.UserPincode
//       });
//     }
//   }, [_id, memberListData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedUser = {
//       userNo: parseInt(userNo),
//       ...formData
//     };
//     updateUser(updatedUser);

//     try {
//       const response = await fetch(`http://localhost:9998/api/member-id/${formData.id}`, {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         const res_data = await response.json();
//         console.log(res_data);
//         setFormData({
//           id: '',
//           UserNo: '',
//           UserName: '',
//           UserEmail: '',
//           UserPincode: ''
//         });
//         navigate('/users');
//       } else {
//         console.error('Update failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Find the current user for display
//   const memberListDataString = JSON.stringify(memberListData)
//   const memberArray =  memberListDataString.split(',');
//   const currentUser =  memberArray .find(user => user._id === parseInt(_id));
//   console.log(currentUser)

//   return (
//     <>
//       <Sidebar />
//       <div className="edit-user-container">
//         <h2>Edit User</h2>
        
//         {/* Display Container */}
//         {currentUser ? (
//           <div className="user-display-container">
//             <h3>Current User Details</h3>
//             <div><strong>ID:</strong> {currentUser._id}</div>
//             <div><strong>UserNo:</strong> {currentUser.UserNo}</div>
//             <div><strong>User Name:</strong> {currentUser.UserName}</div>
//             <div><strong>User Email:</strong> {currentUser.UserEmail}</div>
//             <div><strong>User Pincode:</strong> {currentUser.UserPincode}</div>
//           </div>
//         ) : (
//           <p>User not found.</p>
//         )}

//         <form onSubmit={handleSubmit} className="edit-user-form">
//           <div className="form-group">
//             <label htmlFor="id">ID:</label>
//             <input
//               type="text"
//               id="id"
//               name="id"
//               value={formData.id}
//               onChange={handleChange}
//               required
//               disabled
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="UserNo">UserNo:</label>
//             <input
//               type="number"
//               id="UserNo"
//               name="UserNo"
//               value={formData.UserNo}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="UserName">User Name:</label>
//             <input
//               type="text"
//               id="UserName"
//               name="UserName"
//               value={formData.UserName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="UserEmail">User Email:</label>
//             <input
//               type="email"
//               id="UserEmail"
//               name="UserEmail"
//               value={formData.UserEmail}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="UserPincode">User Pincode:</label>
//             <input
//               type="text"
//               id="UserPincode"
//               name="UserPincode"
//               value={formData.UserPincode}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="update-btn">Update User</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default EditUser;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../store/auth'; 
// import Sidebar from './Sidebar';
// import './Edituser.css';

// const EditUser = () => {
//   const { memberListData, updateUser } = useAuth();
//   const { userId } = useParams(); // Extract userId from the URL
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     id: '',
//     UserNo: '',
//     UserName: '',
//     UserEmail: '',
//     UserPincode: ''
//   });

//   useEffect(() => {
//     // Fetch the user data based on userId from memberListData
//     const memberListDataString = JSON.stringify(memberListData)
//         const memberArray =  memberListDataString.split(',');
//     const currentUser = memberArray.find(user => user.id === userId);
//     if (currentUser) {
//       setFormData({
//         id: currentUser._id,
//         UserNo: currentUser.UserNo,
//         UserName: currentUser.UserName,
//         UserEmail: currentUser.UserEmail,
//         UserPincode: currentUser.UserPincode
//       });
//     }
//   }, [userId, memberListData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedUser = { ...formData };
//     updateUser(updatedUser);
//     navigate('/users'); // Redirect to the users page after updating the user

//     try {
//       const response = await fetch(`http://localhost:9998/api/member-id/${formData.id}`, {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         const res_data = await response.json();
//         console.log(res_data);
//         navigate('/users');
//       } else {
//         console.error('Update failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const memberListDataString = JSON.stringify(memberListData)
//     const memberArray =  memberListDataString.split(',');
//     const currentUser =  memberArray .find(user => user.id === parseInt(id));
//     console.log(currentUser)


//   return (
//     <>
//       <Sidebar />
//       <div className="edit-user-container">
//         <h2>Edit User</h2>

//         {/* Display Container */}
//         <div className="user-display-container">
//           {currentUser.id ? (
//             <>
//               <h3>Current User Details</h3>
//               <div><strong>ID:</strong> {currentUser._id}</div>
//               <div><strong>UserNo:</strong> {formData.UserNo}</div>
//               <div><strong>User Name:</strong> {formData.UserName}</div>
//               <div><strong>User Email:</strong> {formData.UserEmail}</div>
//               <div><strong>User Pincode:</strong> {formData.UserPincode}</div>
//             </>
//           ) : (
//             <p>User not found.</p>
//           )}
//         </div>

//         {/* Edit Form */}
//         <form onSubmit={handleSubmit} className="edit-user-form">
//           <div className="form-group">
//             <label htmlFor="id">ID:</label>
//             <input
//               type="text"
//               id="id"
//               name="id"
//               value={formData.id}
//               onChange={handleChange}
//               required
//               disabled
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="UserNo">UserNo:</label>
//             <input
//               type="number"
//               id="UserNo"
//               name="UserNo"
//               value={formData.UserNo}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="UserName">User Name:</label>
//             <input
//               type="text"
//               id="UserName"
//               name="UserName"
//               value={formData.UserName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="UserEmail">User Email:</label>
//             <input
//               type="email"
//               id="UserEmail"
//               name="UserEmail"
//               value={formData.UserEmail}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="UserPincode">User Pincode:</label>
//             <input
//               type="text"
//               id="UserPincode"
//               name="UserPincode"
//               value={formData.UserPincode}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button onClick={handleSubmit} type="submit" className="update-btn">Update User</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default EditUser;




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth'; 
import Sidebar from './Sidebar';
import './Edituser.css';

const EditUser = () => {
  const { memberListData, updateUser } = useAuth();
  const { userId } = useParams(); // Extract userId from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    UserNo: '',
    UserName: '',
    UserEmail: '',
    UserPincode: '',
    Created_by:'',
    Edited_by:''
    
  });

  useEffect(() => {
    // Fetch the user data based on userId from memberListData
    const currentUser = memberListData.find(user => user._id === userId);
    if (currentUser) {
      setFormData({
        id: currentUser._id,
        UserNo: currentUser.UserNo,
        UserName: currentUser.UserName,
        UserEmail: currentUser.UserEmail,
        UserPincode: currentUser.UserPincode,
        Created_by:currentUser.Created_by,
        Edited_by:currentUser.Edited_by
      });
    }
  }, [userId, memberListData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9998/api/member-id/${formData.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setFormData({
          id: '',
          UserNo: '',
          UserName: '',
          UserEmail: '',
          UserPincode: '',
          Created_by:'' ,
          Edited_by:''
        });
        updateUser(formData); // Optionally update local state
        navigate('/users'); // Redirect to the users page after updating the user
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
      <div className="edit-user-container">
        <h2>Edit User</h2>

        {/* Display Container */}
        <div className="user-display-container">
          {formData.id ? (
            <>
              <h3>Current User Details</h3>
              <div><strong>ID:</strong> {formData.id}</div>
              <div><strong>UserNo:</strong> {formData.UserNo}</div>
              <div><strong>User Name:</strong> {formData.UserName}</div>
              <div><strong>User Email:</strong> {formData.UserEmail}</div>
              <div><strong>User Pincode:</strong> {formData.UserPincode}</div>
              <div><strong>Created By:</strong> {formData.Created_by}</div>
              <div><strong>Edited By:</strong> {formData.Edited_by}</div>
            </>
          ) : (
            <p>User not found.</p>
          )}
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="edit-user-form">
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
            <label htmlFor="UserNo">UserNo:</label>
            <input
              type="number"
              id="UserNo"
              name="UserNo"
              value={formData.UserNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="UserName">User Name:</label>
            <input
              type="text"
              id="UserName"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="UserEmail">User Email:</label>
            <input
              type="email"
              id="UserEmail"
              name="UserEmail"
              value={formData.UserEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="UserPincode">User Pincode:</label>
            <input
              type="text"
              id="UserPincode"
              name="UserPincode"
              value={formData.UserPincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="UserPincode">Created_by:</label>
            <input
              type="text"
              id="UserPincode"
              name="created_by"
              value={formData.Created_by}
              onChange={handleChange}
              required
              disabled
            />
          </div>


          <div className="form-group">
            <label htmlFor="UserPincode">Edited_by:</label>
            <input
              type="text"
              id="UserPincode"
              name="Edited_by"
              value={formData.Edited_by}
              onChange={handleChange}
              required
              
            />
          </div>






          <button type="submit" className="update-btn">Update User</button>
        </form>
      </div>
    </>
  );
};

export default EditUser;

