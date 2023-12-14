import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import defaultCoursePhoto from '../../img/defaultCoursePhoto.png';
import { CourseData } from '../../types/components/componentType';
import './card.scss';

const CardOfCourse = () => {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('URL/api/courseDetails'); // Replace with a real URL!!!
        const courseDetails = response.data;

        setCourseData({
          rating: courseDetails?.rating ?? 0,
          photoUrl: courseDetails?.photoUrl ?? defaultCoursePhoto,
          name: courseDetails?.courseName ?? 'Name of the course',
          category: courseDetails?.courseCategory ?? 'Uncategorized',
          price: courseDetails?.price ?? 0.0,
        });
      } catch (error) {
        console.error('Error fetching course details:', error);
        setCourseData({
          rating: null,
          photoUrl: defaultCoursePhoto,
          name: 'Name of the course',
          category: 'Uncategorized',
          price: 0.0,
        });
      }
    };

    fetchData();
  }, []);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ maxWidth: 200, padding: '0 10px', borderRadius: '20px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
        <Typography variant="body1">{courseData?.rating}</Typography>
        <StarIcon />
      </Box>
      <CardMedia
        component="img"
        alt="Course Photo"
        height="100%"
        sx={{ borderRadius: '30px' }}
        src={courseData?.photoUrl}
      />
      <CardContent sx={{ padding: '0', marginTop: '5px' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ lineHeight: '1.2' }} variant="h6" component="div">
            {courseData?.name}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {courseData?.category}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <GroupsIcon />
          <Link to='/sign-up' className='link'>
            Join our learning
          </Link>
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: '600' }} role="course-price">
          {`$${courseData?.price}`}
        </Typography>
        <Box>
          <IconButton aria-label="Add to Cart">
            <ShoppingCartIcon sx={{ color: '#000' }} />
          </IconButton>
          <IconButton aria-label="Add to Favorites" onClick={handleFavoriteClick}>
            <FavoriteIcon sx={{ color: isFavorite ? '#ff0000' : '#000' }} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardOfCourse;