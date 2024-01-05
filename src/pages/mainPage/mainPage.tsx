import React from 'react';
import HeaderMain  from '../../components/headerMain/headerMain';
import CardOfCourse  from '../../components/cardOfCourse/CardOfCourse';
import './_mainPage.scss';
import { MainPageProps } from '../../types/components/componentType';
import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import Sorting from '../../components/extendedFilter/sorting';
import FilterBy from '../../components/extendedFilter/filterBy';

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return (
    <div data-testid="main-page">
      {children}
      <HeaderMain />
      <ExtendedFilter />
      <div className='flex-row'>
        <FilterBy/>
        <Sorting/>
      </div>     
      <CardOfCourse />
    </div>
  );
};

export default MainPage;