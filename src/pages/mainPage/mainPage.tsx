import CardOfCourse from '../../components/cardOfCourse/CardOfCourse';
import HeaderMain from '../../components/headerMain/headerMain';
import { MainPageProps } from '../../types/components/componentType';
import SideFilter from '../../components/sideFilter/sideFilter';
import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import Sorting from '../../components/extendedFilter/sorting';
import FilterBy from '../../components/extendedFilter/filterBy';
import './_mainPage.scss';

import React from 'react';

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div data-testid="main-page">
      <HeaderMain />
      <ExtendedFilter />
      <div className="flex-row">
        <FilterBy />
        <Sorting />
      </div>
      <CardOfCourse />
      <SideFilter />
    </div>
  );
};

export default MainPage;
