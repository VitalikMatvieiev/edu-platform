import {useState } from 'react';
import SearchInput from '../searchInput/searchInput';
import './_dashboard.scss';
import EnrolledCourseList from './coursesList/coursesList';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { Container, IconButton } from '@mui/material';

const Dashboard: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
      };
    return(
        <Container>        
            <div className='dashboard-text-search-container'>
                <span className='dashboard-text'>Dashboard</span>
                <div className='dashboard-search-icons'> 
                    <div>
                        <SearchInput
                            placeholder="Search courses"
                            value={searchValue}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div>
                        <IconButton aria-label="Mail">
                            <MailIcon sx={{ color: '#000' }} />
                        </IconButton>
                        <IconButton aria-label="Notification">
                            <NotificationsIcon sx={{ color: '#000' }} />
                        </IconButton>
                        <IconButton aria-label="Chat">
                            <ChatIcon sx={{ color: '#000' }} />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div>
                <EnrolledCourseList/>
            </div>
        </Container>
        
    )
}

export default Dashboard;