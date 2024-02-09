import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { SidebarData, SidebarFooterData } from './sidebarData';
import sidebarStyle from './_sidebar.module.scss';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`${sidebarStyle.sidebar} ${expanded ? `${sidebarStyle.expanded}` : `${sidebarStyle.collapsed}`}`}>
      <button
        className={sidebarStyle["sidebar-button"]}
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        {expanded ? <ChevronLeftRoundedIcon /> : <ChevronRightRoundedIcon />}
      </button>

      <div className={sidebarStyle["sidebar-top"]}>
        <div className={sidebarStyle["sidebar-top-user"]}>
          <AccountCircleIcon style={{ width: '24px', height: '24px' }} />
          <div className={sidebarStyle["sidebar-top-user-text"]}>
            <h6>Welcome to</h6>
            <span>react.pro@gmail.com</span>
          </div>
        </div>
      </div>

      <ul className={sidebarStyle["sidebar-list"]}>
        {SidebarData.map(({ title, icon, link }, key) => {
          return (
            <NavLink
              key={key}
              to={link}
              className={({ isActive }) => (isActive ? `${sidebarStyle.active}` : `${sidebarStyle.inactive}`)}
            >
              <li key={key} className={sidebarStyle["sidebar-list-item"]}>
                <div>{icon}</div>
                <div>{title}</div>
              </li>
            </NavLink>
          );
        })}

        <div className={sidebarStyle["sidebar-list-bottom"]}>
          {SidebarFooterData.map(({ title, icon, link }, key) => {
            return (
              <NavLink
                key={key}
                to={link}
                className={({ isActive }) => (isActive ? `${sidebarStyle.active}` : `${sidebarStyle.inactive}`)}
              >
                <li key={key} className={sidebarStyle["sidebar-list-item"]}>
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
