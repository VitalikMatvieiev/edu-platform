import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
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
        {SidebarData.map((val, key) => {
          return (
            <Link to={val.link}>
              <li key={key} className="sidebar-list-item">
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </li>
            </Link>
          );
        })}

        <div className="sidebar-list-bottom">
          {SidebarFooterData.map((val, key) => {
            return (
              <Link to={val.link}>
                <li key={key} className="sidebar-list-item">
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                </li>
              </Link>
            );
          })}
        </div>
      </ul>
    </aside>
  );
};
