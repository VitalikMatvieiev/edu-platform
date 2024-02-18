import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import { SearchInput } from '../../shared/components/inputs';
import * as model from '../../shared/model';
import './_headerMain.scss';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

//Styles for modal from mui
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const HeaderMain: React.FC = () => {
  const navigate = useNavigate();
  const isLogged = false;

  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.courses.searchTerm);
  const searchResults = useAppSelector((state) => state.courses.searchResults);

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(model.courses.setSearchTerm(e.target.value));
    dispatch(model.courses.performSearch());
  };

  return (
    <div className="header-container">
      <div className="header-link">
        <IconButton size="small">
          <ShoppingBasketIcon fontSize="small" style={{ color: 'white' }} />
        </IconButton>
        <span className="header-text">Discover new courses</span>
      </div>
      <SearchInput
        placeholder="Search courses"
        value={searchValue}
        onChange={inputChangeHandler}
      />
      <div className="header-list">
        <Link to="#">
          {/*Will be Wishlist route*/}
          <IconButton size="medium">
            <FavoriteBorderIcon fontSize="medium" style={{ color: 'white' }} />
          </IconButton>
        </Link>
        <Link to="#">
          {/*Will be Cart route*/}
          <IconButton size="medium">
            <LocalMallIcon fontSize="medium" style={{ color: 'white' }} />
          </IconButton>
        </Link>
        {/*When user is logged, we will see his avatar. If no - link for login/registarion pages*/}
        {isLogged ? (
          <img alt="userPhoto" />
        ) : (
          <>
            <IconButton size="medium" onClick={handleOpen}>
              <LoginIcon fontSize="medium" style={{ color: 'white' }} />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Stack direction="row" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<AccountCircleIcon />}
                    onClick={() => navigate('/')}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<NoAccountsIcon />}
                    onClick={() => navigate('/sign-up')}
                  >
                    Registration
                  </Button>
                </Stack>
              </Box>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
