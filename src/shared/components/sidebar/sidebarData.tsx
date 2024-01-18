import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HouseIcon from '@mui/icons-material/House';
import DoneIcon from '@mui/icons-material/Done';
import NoteIcon from '@mui/icons-material/Note';

export const SidebarData = [
  {
    title: 'Course Overview',
    icon: <ViewComfyIcon />,
    link: '/main',
  },
  {
    title: 'Upcoming Classes',
    icon: <HouseIcon />,
    link: '/',
  },
  {
    title: 'Grades & Progress',
    icon: <DoneIcon />,
    link: '/',
  },
  {
    title: 'Instructors',
    icon: <PeopleAltIcon />,
    link: '/',
  },
  {
    title: 'Course Notes',
    icon: <NoteIcon />,
    link: '/',
  },
];

export const SidebarFooterData = [
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/main',
  },
  {
    title: 'Log Out',
    icon: <LogoutIcon />,
    link: '/main',
  },
];
