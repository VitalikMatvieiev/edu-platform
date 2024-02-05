import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import HeaderMain from '../../components/headerMain/headerMain';
import FilterBy from '../../components/extendedFilter/filterBy';
import SideFilter from '../../components/sideFilter/sideFilter';
import Sorting from '../../components/extendedFilter/sorting';
import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import { CourseCard } from '../../components/course-card';
import { FooterMain } from '../../components/footer-main';
import {
  CourseData,
  MainPageProps,
} from '../../types/components/componentType';
import MOCKED_COURSES from './MOCK_DATA.json';
import * as model from '../../shared/model';
import './_mainPage.scss';

import { FC, useEffect, useState } from 'react';

const MainPage: FC<MainPageProps> = () => {
  //   const testCart = useAppSelector((state) => state.cart);
  //   console.log(testCart);
  //   const testFavorite = useAppSelector((state) => state.favorite);
  //   console.log(testFavorite);

  const coursesData = MOCKED_COURSES as CourseData[];
  const dispatch = useAppDispatch();

  useEffect(() => {
    // add data to Redux
    dispatch(model.courses.setCourses(coursesData));
  }, [dispatch, coursesData]);

  const testCourses = useAppSelector((state) => state.courses);
  console.log(testCourses);
  console.log(coursesData);

  return (
    <div data-testid="main-page" className="main-page">
      <div className="main-page-container">
        <HeaderMain />
        <ExtendedFilter />
        <div className="main-page-container-filter">
          <FilterBy />
          <Sorting />
        </div>
        <div className="main-page-container-content">
          <SideFilter />
          <div className="main-page-container-content-cards">
            {coursesData.map((course) => (
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
