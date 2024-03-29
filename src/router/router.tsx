import { RegistrationPage } from '../pages/registrationPage/registrationPage';
import { UserProfile } from '../pages/profilePage/UserProfile';
import { LoginPage } from '../pages/loginPage/loginPage';
import { MainPage } from '../pages/mainPage/mainPage';
import { PrimaryPage } from '../pages/primaryPage/primaryPage';
import InstructorsPage from '../pages/instructorsPage/instructorsPage';
import DashboardPage from '../pages/dashboardPage/dashboardPage';

import { createBrowserRouter } from 'react-router-dom';

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
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/primary',
    element: <PrimaryPage />,
    children: [
      {
        path: 'instructors',
        element: <InstructorsPage />,
      },
    ],
  },
]);
