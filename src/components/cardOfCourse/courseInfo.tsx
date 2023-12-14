import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box } from '@mui/material';

const CourseInfo = () => {
  const [courseInfo, setCourseInfo] = useState({
    name: '',
    category: '',
  });

  useEffect(() => {
    const fetchCourseInfo = async () => {
      try {
        const nameResponse = await axios.get('URL/api/courseName'); // Replace with a real URL!!!
        const categoryResponse = await axios.get('URL/api/courseCategory'); // Replace with a real URL!!!

        const fetchedCourseName = nameResponse.data.courseName;
        const fetchedCourseCategory = categoryResponse.data.courseCategory;

        setCourseInfo({
          name: fetchedCourseName !== undefined ? fetchedCourseName : 'Name of the course',
          category: fetchedCourseCategory !== undefined ? fetchedCourseCategory : 'Uncategorized',
        });
      } catch (error) {
        console.error('Error fetching course info:', error);
        setCourseInfo({
          name: 'Name of the course',
          category: 'Uncategorized',
        });
      }
    };

    fetchCourseInfo();
  }, []);

  return (
    <Box sx={{ textAlign: 'center'}}>
      <Typography sx={{ lineHeight: '1.2'}} variant="h6" component="div">
        {courseInfo.name}
      </Typography>
      <Typography variant="subtitle2" component="div">
        {courseInfo.category}
      </Typography>
    </Box>
  );
};

export default CourseInfo;