import React from 'react';
import HeaderMain  from '../../components/headerMain/headerMain';
import CardOfCourse  from '../../components/cardOfCourse/CardOfCourse';
import './_mainPage.scss';
import { MainPageProps } from '../../types/components/componentType';
import SideFilter from '../../components/sideFilter/sideFilter';


const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div data-testid="main-page">
      <HeaderMain />
      <CardOfCourse />
      <SideFilter />
    </div>
  );
};

export default MainPage;