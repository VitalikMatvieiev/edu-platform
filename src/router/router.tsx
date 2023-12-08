import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';
import RegistrationPage from '../pages/registrationPage/registrationPage';
import UserProfile from "../pages/UserProfile";

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
    element: <RegistrationPage /> 
  },
]);

