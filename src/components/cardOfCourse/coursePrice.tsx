import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const CoursePrice = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchCoursePrice = async () => {
      try {
        const response = await axios.get('URL/api/coursePrice'); // Replace with a real URL!!!
        const fetchedPrice = response.data.price;

        if (fetchedPrice !== undefined) {
          setPrice(fetchedPrice);
        } else {
          setPrice(0);
        }
      } catch (error) {
        console.error('Error fetching course price:', error);
        setPrice(0);
      }
    };

    fetchCoursePrice();
  }, []);

  return (
    <Typography variant="h6" component="div" sx={{ fontWeight: '600'}}>
      {price !== undefined ? `$${price}` : `$0`}
    </Typography>
  );
};

export default CoursePrice;