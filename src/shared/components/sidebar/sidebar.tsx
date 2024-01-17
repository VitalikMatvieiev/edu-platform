import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { SidebarData, SidebarFooterData } from './sidebarData';
import './_sidebar.scss';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <button
        className="sidebar-button"
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        {expanded ? <ChevronLeftRoundedIcon /> : <ChevronRightRoundedIcon />}
      </button>

      <div className="sidebar-top">
        <div className="sidebar-top-user">
          <AccountCircleIcon style={{ width: '24px', height: '24px' }} />
          <div className="sidebar-top-user-text">
            <h6>Welcome to</h6>
            <span>react.pro@gmail.com</span>
          </div>
        </div>
      </div>

      <ul className="sidebar-list">
        {SidebarData.map(({ title, icon, link }, key) => {
          return (
            <NavLink
              to={link}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <li key={key} className="sidebar-list-item">
                <div>{icon}</div>
                <div>{title}</div>
              </li>
            </NavLink>
          );
        })}

        <div className="sidebar-list-bottom">
          {SidebarFooterData.map(({ title, icon, link }, key) => {
            return (
              <NavLink
                to={link}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <li key={key} className="sidebar-list-item">
                  <div>{icon}</div>
                  <div>{title}</div>
                </li>
              </NavLink>
            );
          })}
        </div>
      </ul>
    </aside>
  );
};
