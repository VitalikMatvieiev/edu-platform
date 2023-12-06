import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
]);

