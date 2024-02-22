import styles from './_headerInstructors.module.scss';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { SearchInput } from '../../shared/components';
import { HeaderInstructorsProps } from '../../types/components/componentType';

export const HeaderInstructors: React.FC<HeaderInstructorsProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className={styles['header-instructor-container']}>
      <div>
        <span className={styles['header-instructor-text']}>Instructors</span>
      </div>
      <div className={styles['header-instructor-list']}>
        <div className={styles['header-list-search']}>
          <SearchInput
            placeholder="Search for instructors"
            value={value}
            onChange={onChange}
          />
        </div>
        <Link to="#" role="link">
          {/*Will be Notification route*/}
          <IconButton size="medium">
            <NotificationsIcon fontSize="medium" style={{ color: 'black' }} />
          </IconButton>
        </Link>
        <Link to="#" role="link">
          {/*Will be Email route*/}
          <IconButton size="medium">
            <EmailIcon fontSize="medium" style={{ color: 'black' }} />
          </IconButton>
        </Link>
        <Link to="#" role="link">
          {/*Will be Chat route*/}
          <IconButton size="medium">
            <ChatBubbleIcon fontSize="medium" style={{ color: 'black' }} />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
