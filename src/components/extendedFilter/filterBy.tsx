import { CourseData } from '../../types/components/componentType';
import './extendedFilter.scss';

import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const FilterBy: React.FC = () => {
  const [isFilterVisible, setFilterVisible] = useState<boolean>(false);
  const [filteredCourses, setFilteredCourses] = useState<CourseData[]>([]);

  const toggleFilter = () => {
    setFilterVisible((prevValue) => !prevValue);
  };

  const sortByCategory = () => {
    const sortedCourses = [...filteredCourses].sort((a, b) =>
      a.category.localeCompare(b.category),
    );
    setFilteredCourses(sortedCourses);
  };

  const sortCourses = (key: keyof CourseData) => {
    const sortedCourses = [...filteredCourses].sort(
      (a, b) => (a[key] as any) - (b[key] as any),
    );
    setFilteredCourses(sortedCourses);
  };

  return (
    <>
      <div className="flex-container">
        <div className="flex">
          <IconButton
            sx={{ background: '#ff0000 ', marginRight: '5px' }}
            onClick={toggleFilter}
            data-testid="filter-button"
          >
            <ReorderIcon fontSize="small" />
          </IconButton>
          <span className="name-list" onClick={toggleFilter}>
            Filter by:
          </span>
        </div>
        {isFilterVisible && (
          <ul className="list__filter" data-testid="filter-options">
            <li onClick={sortByCategory} className="list__filter--item">
              Category
            </li>
            <li
              onClick={() => sortCourses('level')}
              className="list__filter--item"
            >
              Level
            </li>
            <li
              onClick={() => sortCourses('price')}
              className="list__filter--item"
            >
              Price
            </li>
            <li
              onClick={() => sortCourses('rating')}
              className="list__filter--item"
            >
              Rating
            </li>
          </ul>
        )}
      </div>
      {/* //Add list component */}
      {/* <ul>
        {filteredCourses.map(course => (
          <li key={course.name}>
            {course.category} - Level: {course.level} - Price: {course.price} - Rating: {course.rating}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default FilterBy;
