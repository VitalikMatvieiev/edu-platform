import './_mainPage.scss';
import CardOfCourse from '../../components/cardOfCourse/CardOfCourse';
import { MainPageProps } from '../../types/components/componentType';
import SideFilter from '../../components/sideFilter/sideFilter';
import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import Sorting from '../../components/extendedFilter/sorting';
import FilterBy from '../../components/extendedFilter/filterBy';
import HeaderMain from '../../components/headerMain/headerMain';
import { Sidebar } from '../../shared/components';

import React from 'react';

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div data-testid="main-page" className="main-page">
      <Sidebar />
      <div className="main-page-container">
        <HeaderMain />
        <ExtendedFilter />
        <div className="flex-row">
          <FilterBy />
          <Sorting />
        </div>
        <CardOfCourse />
        <SideFilter />
      </div>
    </div>
  );
};

export default MainPage;
