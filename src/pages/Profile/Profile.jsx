import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import UserProfile from '../../components/UserProfile/UserProfile';

function Profile({
  isLoggedIn,
  handleSignOut,
  navigate,
  updateUserData,
  updateUserStatus,
  setUpdateUserStatus,
  isSuccessUpdate,
  isLoading,
}) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main>
        <UserProfile
          updateUserData={updateUserData}
          updateUserStatus={updateUserStatus}
          setUpdateUserStatus={setUpdateUserStatus}
          handleSignOut={handleSignOut}
          isSuccessUpdate={isSuccessUpdate}
          navigate={navigate}
          isLoading={isLoading}
        />
      </main>
    </>
  );
}

Profile.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  updateUserData: PropTypes.func.isRequired,
  updateUserStatus: PropTypes.string.isRequired,
  setUpdateUserStatus: PropTypes.func.isRequired,
  isSuccessUpdate: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Profile;
