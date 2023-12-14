import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';
import RegistrationPage from '../pages/registrationPage/registrationPage';
import UserProfile from "../pages/profilePage/UserProfile";
import MainPage from '../pages/mainPage/mainPage';

export const router = createBrowserRouter([
  {
    path: '/UserProfile',
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
