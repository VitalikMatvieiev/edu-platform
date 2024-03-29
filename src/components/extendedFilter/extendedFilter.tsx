import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import './extendedFilter.scss';
import { Course } from '../../types/components/componentType';

const ExtendedFilter: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // replace with a real api
    const fetchListOfCategory = async () => {
      try {
        const temporaryData: Course[] = [
          { id: 1, category: 'Marketing' },
          { id: 2, category: 'Web Development' },
          { id: 3, category: 'Graphic Design' },
          { id: 4, category: 'Data Science' },
          { id: 5, category: 'Business' },
          { id: 6, category: 'Language Learning' },
          { id: 7, category: 'React Native Development' },
          { id: 8, category: 'React Development' },
        ];

        setCourses(temporaryData);
      } catch (error) {
        console.error('Error fetching');
      }
    };
    fetchListOfCategory();
  }, []);

  const handleCourseClick = (courseName: string) => {
    setSelectedCategory(courseName === selectedCategory ? null : courseName);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const increment = direction === 'left' ? -1 : 1;
    setStartIndex((prevIndex) => Math.max(0, prevIndex + increment));
  };

  const visibleCourses = courses.slice(startIndex, startIndex + 6);

  return (
    <div className="filter-container">
      {selectedCategory ? (
        <h2 className="title-filter">Result for {selectedCategory}:</h2>
      ) : (
        <h2 className="title-filter">Choose the name of the course:</h2>
      )}
      <div className="scroll-buttons">
        <IconButton
          data-testid="scroll-left-button"
          onClick={() => handleScroll('left')}
          disabled={startIndex === 0}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <ul className="list__filter space-around">
          {visibleCourses.map((course) => (
            <li
              key={course.id}
              onClick={() => handleCourseClick(course.category)}
              className={`list__filter--item`}
            >
              {course.category}
            </li>
          ))}
        </ul>
        <IconButton
          data-testid="scroll-right-button"
          onClick={() => handleScroll('right')}
          disabled={startIndex === courses.length - 6}
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
      {/*add list of filtered courses */}
      {/*
      <ul>
        {courses
          .filter((course) => course.category === selectedCategory)
          .map((course) => (
            <li key={course.id}>{course.category}</li>
          ))}
      </ul> */}
    </div>
  );
};

export default ExtendedFilter;