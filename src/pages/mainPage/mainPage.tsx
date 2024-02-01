import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
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
import { useAppSelector } from '../../shared/model/store';

const MainPage: FC<MainPageProps> = () => {
  const testCart = useAppSelector((state) => state.cart);
  console.log(testCart);
  const testFavorite = useAppSelector((state) => state.favorite);
  console.log(testFavorite);

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
                id={course.id}
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
