import { Box, Card, CardMedia, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

import './course-card.scss';
import * as model from '../../shared/model';
import { useAppDispatch } from '../../shared/model/hooks';

interface Props {
  rating: number;
  photoUrl: string;
  name: string;
  category: string;
  level: string;
  price: string;
}

export const CourseCard = ({
  rating,
  photoUrl,
  name,
  category,
  price,
}: Props) => {
  //   const dispatch = useAppDispatch();
  //   dispatch(model.cart.addToCart(courseData));

  return (
    <Card
      sx={{
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        borderRadius: '20px',
        padding: '0 10px',
        marginTop: '30px',
        maxWidth: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          marginTop: '5px',
        }}
      >
        <Box
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            display: 'flex',
            gap: 0.5,
          }}
        >
          <Typography variant="body1">{rating}</Typography>
          <StarIcon />
        </Box>

        <CardMedia
          sx={{ borderRadius: '20px' }}
          alt="Course Photo"
          component="img"
          src={photoUrl}
          height="200px"
        />
      </Box>

      <CardContent sx={{ padding: '0', marginTop: '5px' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ lineHeight: '1.2' }} variant="h6" component="div">
            {name}
          </Typography>

          <Typography variant="subtitle2" component="div">
            {category}
          </Typography>
        </Box>
      </CardContent>

      <Box>
        <Box
          sx={{
            justifyContent: 'space-around',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <GroupsIcon />
          <Link to="/sign-up" className="link">
            Join our learning
          </Link>
        </Box>

        <CardActions
          sx={{
            justifyContent: 'space-between',
            padding: '0 5px',
            display: 'flex',
          }}
        >
          <Typography
            sx={{ fontWeight: '600' }}
            role="course-price"
            component="div"
            variant="h6"
          >
            {price}
          </Typography>

          <Box>
            <IconButton onClick={() => {}} aria-label="Add to Cart">
              <ShoppingCartIcon sx={{ color: '#000' }} />
            </IconButton>

            <IconButton onClick={() => {}} aria-label="Add to Favorites">
              {/* <FavoriteIcon sx={{ color: isFavorite ? '#ff0000' : '#000' }} /> */}
              <FavoriteIcon sx={{ color: '#ff0000' }} />
            </IconButton>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};
