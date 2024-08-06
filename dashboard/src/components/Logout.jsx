// components/Logout.jsx
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Logout = () => {
  const {LogoutUser} = useAuth();
useEffect (() =>{
  LogoutUser();
} , [LogoutUser])

  return (
   
    <div>
       <Navigate to="/login" replace={true} />
      <h1>You have been logged out</h1>
    </div>
  );
};

export default Logout;
