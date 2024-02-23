import { CourseData } from '../../types/components/componentType';
import styles from './_extendedFilter.module.scss';

import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export const FilterBy: React.FC = () => {
  const [filteredCourses, setFilteredCourses] = useState<CourseData[]>([]);
  const [isFilterVisible, setFilterVisible] = useState<boolean>(false);

  const handleToggleFilter = () => {
    setFilterVisible((prevValue) => !prevValue);
  };

  const handleSortByCategory = () => {
    const sortedCourses = [...filteredCourses].sort((a, b) =>
      a.category.localeCompare(b.category),
    );
    setFilteredCourses(sortedCourses);
  };

  const handleSortCourses = (key: keyof CourseData) => {
    const sortedCourses = [...filteredCourses].sort(
      (a, b) => (a[key] as any) - (b[key] as any),
    );
    setFilteredCourses(sortedCourses);
  };

  return (
    <>
      <div className={styles['flex-container']}>
        <div className={styles['flex']}>
          <IconButton
            sx={{ background: '#ff0000 ', marginRight: '5px' }}
            onClick={handleToggleFilter}
            data-testid="filter-button"
          >
            <ReorderIcon fontSize="small" />
          </IconButton>

          <span className={styles['name-list']} onClick={handleToggleFilter}>
            Filter by:
          </span>
        </div>

        {isFilterVisible && (
          <ul className={styles['list__filter']} data-testid="filter-options">
            <li
              onClick={handleSortByCategory}
              className={styles['list__filter--item']}
            >
              Category
            </li>
            <li
              onClick={() => handleSortCourses('level')}
              className={styles['list__filter--item']}
            >
              Level
            </li>
            <li
              onClick={() => handleSortCourses('price')}
              className={styles['list__filter--item']}
            >
              Price
            </li>
            <li
              onClick={() => handleSortCourses('rating')}
              className={styles['list__filter--item']}
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
