import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import CardOfCourse from '../../components/cardOfCourse/CardOfCourse';
import {
  CourseData,
  MainPageProps,
} from '../../types/components/componentType';
import HeaderMain from '../../components/headerMain/headerMain';
import FilterBy from '../../components/extendedFilter/filterBy';
import SideFilter from '../../components/sideFilter/sideFilter';
import Sorting from '../../components/extendedFilter/sorting';
import { FooterMain } from '../../components/footer-main';
// import { Sidebar } from '../../shared/components';
import './_mainPage.scss';
import MOCKED_COURSES from './MOCK_DATA.json';

import { FC, useEffect, useState } from 'react';
import { CourseCard } from '../../components/course-card';
import { useAppSelector } from '../../shared/model/hooks';

const MainPage: FC<MainPageProps> = () => {
  const test = useAppSelector((state) => state.cart);
  console.log(test);

  const [data, setData] = useState<CourseData[]>([]);
  useEffect(() => {
    setData(MOCKED_COURSES as CourseData[]);
  }, []);

  return (
    <div data-testid="main-page" className="main-page">
      {/* <Sidebar /> */}
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
            {data.map((course) => (
              <CourseCard
                key={course.id}
                category={course.category}
                rating={course.rating}
                level={course.level}
                price={course.price}
                name={course.name}
                photoUrl={course.photoUrl}
              />
            ))}
          </div>
          {/* <CardOfCourse /> */}
        </div>
        <FooterMain />
      </div>
    </div>
  );
};

export default MainPage;
