import { UserProfile as UserProfileType } from '../../types/components/componentType';
import { handlePhotoChange } from './utility/photoUtils';
import { CustomButton } from '../../shared/components';
import photoUpload from '../../img/photoUpload.svg';
import useUserFormik from './utility/formikConfig';
import './userProfile.scss';

import React, { useState, useEffect } from 'react';

const UserProfile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    // Симулюємо отримання даних зі статичних об'єктів
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);

        // Тимчасові дані
        const tempData: UserProfileType = {
          profilePhoto: 'path/to/default/photo.jpg',
          username: 'Liliia Virsta',
          email: 'liliia@example.com',
          dateOfBirth: '2000-01-01',
          registrationDate: '2022-01-01',
          lastLoginTimestamp: '2022-02-01',
        };

        setUserProfile(tempData);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        setError('Error fetching user profile');
      }
    };

    fetchUserProfile();
  }, []);

  const formik = useUserFormik({
    userProfile,
    formError,
    setUserProfile,
    setIsEditing,
    setFormError,
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    formik.resetForm();
  };

  const handleLogout = () => {
    // Виклик сервісу для виходу (з видаленням токенів)
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUserProfile(null);
    setIsEditing(false);
  };

  const handleAddPhoto = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/png, image/jpeg';
    fileInput.addEventListener('change', () =>
      handlePhotoChange(fileInput, formik.setFieldValue),
    );
    fileInput.click();
  };

  return (
    <div className="container-profile">
      <form className="form" onSubmit={formik.handleSubmit}>
        {isLoading ? (
          <p>Loading user profile...</p>
        ) : userProfile ? (
          <div className="profile-width">
            <h1 className="heading--h1">Personal information</h1>
            {isEditing ? (
              <img
                onClick={handleAddPhoto}
                className="photo-upload"
                src={formik.values.profilePhoto || '' || photoUpload}
                alt="profilePhoto"
              />
            ) : (
              <img
                src={'' || photoUpload || formik.values.profilePhoto}
                alt="profilePhoto"
                className="photo-upload"
              />
            )}
            <label className="label">
              <span className="color-gray">Full name</span>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    {...formik.getFieldProps('username')}
                    required
                    className="editing-input"
                  />
                  {formik.touched.username && formik.errors.username && (
                    <div className="error-message">
                      {formik.errors.username}
                    </div>
                  )}
                </>
              ) : (
                <span>{userProfile.username}</span>
              )}
            </label>
            <label className="label">
              <span className="color-gray">Email</span>
              {isEditing ? (
                <>
                  <input
                    type="email"
                    {...formik.getFieldProps('email')}
                    required
                    className="editing-input"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error-message">{formik.errors.email}</div>
                  )}
                </>
              ) : (
                <span>{userProfile.email}</span>
              )}
            </label>
            <label className="label">
              <span className="color-gray">Date of Birth</span>
              {isEditing ? (
                <>
                  <input
                    type="date"
                    {...formik.getFieldProps('dateOfBirth')}
                    required
                    className="editing-input"
                  />
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <div className="error-message">
                      {formik.errors.dateOfBirth}
                    </div>
                  )}
                </>
              ) : (
                <span>{userProfile.dateOfBirth}</span>
              )}
            </label>
            <label className="label">
              <span className="color-gray">Registration Date</span>
              <span>{userProfile.registrationDate}</span>
            </label>
            <label className="label">
              <span className="color-gray">Last login date</span>
              <span>{userProfile.lastLoginTimestamp}</span>
            </label>
            {isEditing ? (
              <CustomButton
                type="submit"
                color="secondary"
                variant="user-page-btn"
              >
                Save Changes
              </CustomButton>
            ) : (
              <CustomButton
                onClick={handleEditClick}
                color="secondary"
                variant="user-page-btn"
              >
                Edit Profile
              </CustomButton>
            )}
            <CustomButton to="/" onClick={handleLogout} variant="user-page-btn">
              Logout
            </CustomButton>
          </div>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p>No user profile available.</p>
        )}
      </form>
      {userProfile && !error && (
        <CustomButton variant="user-page-btn">Show my courses</CustomButton>
      )}
    </div>
  );
};

export default UserProfile;
