import ExtendedFilter from '../../components/extendedFilter/extendedFilter';
import CardOfCourse from '../../components/cardOfCourse/cardOfCourse';
import { FooterMain } from '../../components/footer-main/footerMain';
import { MainPageProps } from '../../types/components/componentType';
import HeaderMain from '../../components/headerMain/headerMain';
import FilterBy from '../../components/extendedFilter/filterBy';
import SideFilter from '../../components/sideFilter/sideFilter';
import Sorting from '../../components/extendedFilter/sorting';
import { Sidebar } from '../../shared/components';
import './_mainPage.scss';

import React from 'react';

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div data-testid="main-page" className="main-page">
      <Sidebar />
      <div className="main-page-container">
        <HeaderMain />
        <ExtendedFilter />
        <div className="main-page-container-filter">
          <FilterBy />
          <Sorting />
        </div>
        <div className="main-page-container-content">
          <SideFilter />
          <CardOfCourse />
        </div>
        <FooterMain />
      </div>
    </div>
  );
};

export default MainPage;
