import { createBrowserRouter } from 'react-router-dom';
import RegistrationPage from '../pages/registrationPage/registrationPage';

export const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <RegistrationPage />,
  },
]);
