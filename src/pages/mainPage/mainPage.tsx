import { SideFilterNew } from '../../components/sideFilterNew/sideFilterNew';
import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import SortingNew from '../../components/extendedFilter/sortingNew';
import HeaderMain from '../../components/headerMain/headerMain';
import FilterBy from '../../components/extendedFilter/filterBy';
import { CourseCard } from '../../components/course-card';
import { FooterMain } from '../../components/footer-main';
import MOCKED_COURSES from './MOCK_DATA.json';
import {
  CourseData,
  MainPageProps,
} from '../../types/components/componentType';
import * as model from '../../shared/model';
import './_mainPage.scss';

import { FC, useEffect, useState } from 'react';

// Функція для фільтрації курсів за різними критеріями
function filterCourses(
  courses: CourseData[],
  searchedData: CourseData[],
  filteredData: CourseData[],
  sortBy: string,
  order: 'asc' | 'desc',
): CourseData[] {
  let currentData = courses; // Початкові дані

  // Застосування пошуку, якщо є запит
  if (searchedData.length > 0) {
    currentData = searchedData;
  }

  // Застосування фільтрів, якщо є дані фільтрації
  if (filteredData.length > 0) {
    currentData = currentData.filter((course) => filteredData.includes(course));
  }

  // Застосування сортування, якщо є сортування
  if (sortBy && order) {
    // Скопіюйте масив перед сортуванням
    const sortedData = [...currentData];

    // Відсортуйте скопійований масив
    sortedData.sort((a, b) => {
      // Логіка сортування залежно від sortBy та order
      switch (sortBy) {
        case 'price':
          return order === 'asc' ? a.price - b.price : b.price - a.price;
        case 'rating':
          return order === 'asc' ? a.rating - b.rating : b.rating - a.rating;
        default:
          // Обробка інших можливих значень sortBy
          return 0;
      }
    });

    // Замініть currentData відсортованим масивом
    currentData = sortedData;
  }

  return currentData;
}

const MainPage: FC<MainPageProps> = () => {
  const coursesMockData = MOCKED_COURSES as CourseData[];
  const dispatch = useAppDispatch();

  const filteredData = useAppSelector((state) => state.courses.filteredCourses);
  const searchedData = useAppSelector((state) => state.courses.searchResults);
  const coursesData = useAppSelector((state) => state.courses.courses);
  const [coursesToRender, setCoursesToRender] = useState(coursesData);
  const sortBy = useAppSelector((state) => state.courses.sortBy);
  const order = useAppSelector((state) => state.courses.order);

  useEffect(() => {
    dispatch(model.courses.setCourses(coursesMockData));
    // Оновлення coursesToRender на основі фільтрів, пошуку та сортування
    const updatedCourses = filterCourses(
      coursesData,
      searchedData,
      filteredData,
      sortBy,
      order,
    );
    setCoursesToRender(updatedCourses);
  }, [
    dispatch,
    coursesMockData,
    coursesData,
    searchedData,
    filteredData,
    sortBy,
    order,
  ]);

  return (
    <div data-testid="main-page" className="main-page">
      <div className="main-page-container">
        <HeaderMain />
        <ExtendedFilter />
        <div className="main-page-container-filter">
          <FilterBy />
          <SortingNew />
        </div>
        <div className="main-page-container-content">
          <SideFilterNew />
          <div className="main-page-container-content-cards">
            {coursesToRender.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                category={course.category}
                rating={course.rating}
                level={course.level}
                price={course.price}
                name={course.name}
                photoUrl={course.photoUrl}
                instructor={course.instructor}
              />
            ))}
          </div>
        </div>
        <FooterMain />
      </div>
    </div>
  );
};

export default MainPage;
