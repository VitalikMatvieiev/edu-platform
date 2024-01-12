import {useState } from 'react';
import SearchInput from '../searchInput/searchInput';
import './_dashboard.scss';
import EnrolledCourseList from './coursesList/coursesList';

const Dashboard: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
      };
    return(
        <div>        
            <div className='dashboard-text-search-container'>
                <span className='dashboard-text'>Dashboard</span>
                <SearchInput
                placeholder="Search courses"
                value={searchValue}
                onChange={inputChangeHandler}
                />
            </div>
            <div>
                <EnrolledCourseList/>
            </div>
        </div>
        
    )
}

export default Dashboard;