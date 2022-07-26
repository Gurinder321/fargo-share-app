import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { getAuth } from 'firebase/auth';

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  return <Layout>{user ? <h1>{user.displayName}</h1> : 'Not logged in User'}</Layout>;
};

export default Profile;
