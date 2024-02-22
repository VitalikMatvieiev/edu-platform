import styles from './_instructorCard.module.scss';
import { useState } from 'react';
import avatar from '../../img/avatar.jpg';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { InstructorCardProps } from '../../types/components/componentType';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const InstructorCard: React.FC<InstructorCardProps> = ({
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
    <div className={styles["instructor-card-container"]}>
      <div className={styles["category-container"]}>
        <span className={styles["category-text"]}>{category.join(', ')}</span>
      </div>
      <div className={styles["info-container"]}>
        <div className={styles["img-container"]}>
          <img src={avatar} alt="ava" />
        </div>
        <div className={styles["name-container"]}>
          <span>{name}</span>
        </div>
        <div className="email-container">
          <span>{email}</span>
        </div>
      </div>
      <div className={styles["buttons-container"]}>
        <button className={styles["button-action"]}>
          <EmailIcon fontSize="small" style={{ color: 'black' }} />
        </button>
        <button className={styles["button-action"]} onClick={handleClick}>
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
            fontFamily: 'Montserrat, sans-serif',
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
            fontFamily: 'Montserrat, sans-serif',
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
            fontFamily: 'Montserrat, sans-serif',
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

