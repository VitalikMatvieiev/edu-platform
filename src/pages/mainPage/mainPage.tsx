import React from 'react';
import HeaderMain  from '../../components/headerMain/headerMain';
import CardOfCourse  from '../../components/cardOfCourse/CardOfCourse';
import './_mainPage.scss';
import { MainPageProps } from '../../types/components/componentType';
import SideFilter from '../../components/sideFilter/sideFilter';
import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import Sorting from '../../components/extendedFilter/sorting';
import FilterBy from '../../components/extendedFilter/filterBy';

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div data-testid="main-page">
      <HeaderMain />
      <ExtendedFilter />
      <div className='flex-row'>
        <FilterBy/>
        <Sorting/>
      </div>     
      <CardOfCourse />
      <SideFilter />
    </div>
  );
};

export default MainPage;