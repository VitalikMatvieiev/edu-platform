import { SideFilterNew } from '../../components/sideFilterNew/sideFilterNew';
import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import { HeaderMain } from '../../components/headerMain/headerMain';
import { CourseCard } from '../../components/course-card';
import { FooterMain } from '../../components/footer-main';
import MOCKED_COURSES from './MOCK_DATA.json';
import {
  CourseData,
  MainPageProps,
} from '../../types/components/componentType';
import styles from './_mainPage.module.scss';
import * as model from '../../shared/model';
import {
  ExtendedFilter,
  SortingNew,
  FilterBy,
} from '../../components/extendedFilter';

import { FC, useEffect, useState } from 'react';

// Функція для фільтрації курсів за різними критеріями
function handleFilterCourses(
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

export const MainPage: FC<MainPageProps> = () => {
  const COURSES_MOCK_DATA = MOCKED_COURSES as CourseData[];
  const dispatch = useAppDispatch();

  const filteredData = useAppSelector((state) => state.courses.filteredCourses);
  const searchedData = useAppSelector((state) => state.courses.searchResults);
  const coursesData = useAppSelector((state) => state.courses.courses);
  const sortBy = useAppSelector((state) => state.courses.sortBy);
  const order = useAppSelector((state) => state.courses.order);

  const [coursesToRender, setCoursesToRender] = useState(coursesData);

  useEffect(() => {
    dispatch(model.courses.setCourses(COURSES_MOCK_DATA));
    // Оновлення coursesToRender на основі фільтрів, пошуку та сортування
    const updatedCourses = handleFilterCourses(
      coursesData,
      searchedData,
      filteredData,
      sortBy,
      order,
    );
    setCoursesToRender(updatedCourses);
  }, [
    COURSES_MOCK_DATA,
    searchedData,
    filteredData,
    coursesData,
    dispatch,
    sortBy,
    order,
  ]);

  return (
    <div data-testid="main-page" className={styles['main-page']}>
      <div className={styles['main-page-container']}>
        <HeaderMain />
        <ExtendedFilter />

        <div className={styles['main-page-container-filter']}>
          <FilterBy />
          <SortingNew />
        </div>

        <div className={styles['main-page-container-content']}>
          <SideFilterNew />

          <div className={styles['main-page-container-content-cards']}>
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
