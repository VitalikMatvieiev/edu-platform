import './_instructorCard.scss';
import { useState } from 'react';
import avatar from '../../img/avatar.jpg';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { InstructorCardProps } from '../../types/components/componentType';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const InstructorCard: React.FC<InstructorCardProps> = ({
  category,
  name,
  email,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="instructor-card-container">
      <div className="category-container">
        <span className="category-text">{category.join(', ')}</span>
      </div>
      <div className="info-container">
        <div className="img-container">
          <img src={avatar} alt="ava" />
        </div>
        <div className="name-container">
          <span>{name}</span>
        </div>
        <div className="email-container">
          <span>{email}</span>
        </div>
      </div>
      <div className="buttons-container">
        <button className="button-action">
          <EmailIcon fontSize="small" style={{ color: 'black' }} />
        </button>
        <button className="button-action" onClick={handleClick}>
          <MoreHorizIcon fontSize="small" style={{ color: 'black' }} />
        </button>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem
          sx={{
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '15px',
            color: '#000',
          }}
          onClick={handleClose}
        >
          Profile
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '15px',
            color: '#000',
          }}
          onClick={handleClose}
        >
          Courses
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '15px',
            color: '#000',
          }}
          onClick={handleClose}
        >
          Assign
        </MenuItem>
      </Menu>
    </div>
  );
};

export default InstructorCard;
