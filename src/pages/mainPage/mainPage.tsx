import { SideFilterNew } from '../../components/sideFilterNew/sideFilterNew';
import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import HeaderMain from '../../components/headerMain/headerMain';
import FilterBy from '../../components/extendedFilter/filterBy';
import Sorting from '../../components/extendedFilter/sorting';
import { CourseCard } from '../../components/course-card';
import { FooterMain } from '../../components/footer-main';
import {
  CourseData,
  MainPageProps,
} from '../../types/components/componentType';
import MOCKED_COURSES from './MOCK_DATA.json';
import * as model from '../../shared/model';
import './_mainPage.scss';

import { FC, useEffect } from 'react';

const MainPage: FC<MainPageProps> = () => {
  const coursesData = MOCKED_COURSES as CourseData[];
  const dispatch = useAppDispatch();
  const filteredData = useAppSelector(
    (state) => state.filteredCourses.filteredCourses,
  );

  console.log(filteredData);

  useEffect(() => {
    // add data to Redux
    dispatch(model.courses.setCourses(coursesData));
  }, [dispatch, coursesData]);

  const coursesToRender = filteredData.length > 0 ? filteredData : coursesData;

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
          {/* <SideFilter /> */}
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
