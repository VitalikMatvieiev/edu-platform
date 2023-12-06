import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/sign-in/loginPage';
import RegistrationPage from '../pages/sign-up/registrationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <RegistrationPage />,
  },
]);
