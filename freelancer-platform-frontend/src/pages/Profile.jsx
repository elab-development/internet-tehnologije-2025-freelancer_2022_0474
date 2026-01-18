import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return (
      <div className="profile-container">
        <h2 className='title-no-user-found'>No user data found</h2>
        <button onClick={() => navigate('/login')} className="profile-button">
          Go to Login
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    
      
    <div className="profile-page">
      
      <div className="profile-container">
        <h2 className="profile-title">My Profile</h2>

        <div className="profile-field">
          <span>First name</span>
          <p>{user.firstname}</p>
        </div>

        <div className="profile-field">
          <span>Last name</span>
          <p>{user.lastname}</p>
        </div>

        <div className="profile-field">
          <span>Email</span>
          <p>{user.email}</p>
        </div>

        <div className="profile-field">
          <span>Role</span>
          <p className="profile-role">{user.role}</p>
        </div>

        <button className="profile-button logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;