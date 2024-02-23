import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import { SearchInput } from '../../shared/components/inputs';
import styles from './_headerMain.module.scss';
import * as model from '../../shared/model';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

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

export const HeaderMain: React.FC = () => {
  const navigate = useNavigate();
  const isLogged = false;

  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.courses.searchTerm);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(model.courses.setSearchTerm(e.target.value));
    dispatch(model.courses.performSearch());
  };

  return (
    <div className={styles['header-container']}>
      <div className={styles['header-link']}>
        <IconButton size="small">
          <ShoppingBasketIcon fontSize="small" style={{ color: 'white' }} />
        </IconButton>

        <span className={styles['header-text']}>Discover new courses</span>
      </div>

      <SearchInput
        placeholder="Search courses"
        value={searchValue}
        onChange={handleInputChange}
      />

      <div className={styles['header-list']}>
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
