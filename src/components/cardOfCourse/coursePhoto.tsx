import { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import defaultCoursePhoto from '../../img/defaultCoursePhoto.png';

const CoursePhoto = () => {
  const [coursePhoto, setCoursePhoto] = useState('');

  const fetchCoursePhoto = async () => {
    try {
      const response = await axios.get('URL/api/coursePhoto'); // Replace with a real URL!!!
      const fetchedPhoto = response.data.photoUrl;

      if (fetchedPhoto !== undefined) {
        setCoursePhoto(fetchedPhoto);
      } else {
        setCoursePhoto(defaultCoursePhoto);
      }
    } catch (error) {
      console.error('Error fetching course photo:', error);
      setCoursePhoto(defaultCoursePhoto);
    }
  };

  useEffect(() => {
    fetchCoursePhoto();
  }, []);

  return (
    <CardMedia
      component="img"
      alt="Course Photo"
      height="100%"
      sx={{ borderRadius: '30px'}}
      src={coursePhoto !== undefined ? coursePhoto : defaultCoursePhoto}
    />
  );
};

export default CoursePhoto;
