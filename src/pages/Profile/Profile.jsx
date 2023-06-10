import React from 'react';
import Header from '../../components/Header/Header';
import UserProfile from '../../components/UserProfile/UserProfile';

function Profile() {
  return (
    <>
      <Header
        isLoggedIn
      />
      <main>
        <UserProfile />
      </main>
    </>
  );
}

export default Profile;
