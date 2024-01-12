import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';
import RegistrationPage from '../pages/registrationPage/registrationPage';
import UserProfile from '../pages/profilePage/userProfile';
import MainPage from '../pages/mainPage/mainPage';

export const router = createBrowserRouter([
  {
    path: '/user-profile',
    element: <UserProfile />,
  },
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <RegistrationPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
]);
