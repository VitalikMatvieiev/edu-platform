import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';

const Rating = () => {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const getRating = async () => {
      try {
        const response = await axios.get('URL/api/rating');
        const fetchedRating = response.data.rating;

        if (fetchedRating !== undefined && fetchedRating !== null) {
          setRating(fetchedRating);
        } else {
          setRating(0);
        }
      } catch (error) {
        console.error('Error fetching rating:', error);
        setRating(0);
      }
    };

    getRating();
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
      <Typography variant="body1">{rating !== null ? rating : 0}</Typography>
      <StarIcon />
    </Box>
  );
};

export default Rating;