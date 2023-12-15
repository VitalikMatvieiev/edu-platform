import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from './rating';
import CoursePhoto from './coursePhoto';
import CourseInfo from './courseInfo';
import { Box } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import CoursePrice from './coursePrice';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import './card.scss';

const CardOfCourse = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ maxWidth: 200, padding: '0 10px', borderRadius: '20px' }}>
      <Rating />
      <CoursePhoto />
      <CardContent sx={{ padding: '0', marginTop: '5px' }}>
        <CourseInfo />
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <GroupsIcon />
          <Link to='/sign-up' className='link'>
            Join our learning
          </Link>
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
        <CoursePrice />
        <Box>
          <IconButton aria-label="Add to Cart">
            <ShoppingCartIcon sx={{ color: '#0000' }} />
          </IconButton>
          <IconButton aria-label="Add to Favorites" onClick={handleFavoriteClick}>
            <FavoriteIcon sx={{ color: isFavorite ? '#ff0000' : '#0000' }} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardOfCourse;
