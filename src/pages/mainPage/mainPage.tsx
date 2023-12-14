import React from 'react';
import HeaderMain  from '../../components/headerMain/headerMain';
import CardOfCourse  from '../../components/cardOfCourse/CardOfCourse';
import './_mainPage.scss';
import { MainPageProps } from '../../types/components/componentType';


const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return (
    <div data-testid="main-page">
      {children}
      <HeaderMain />
      <CardOfCourse />
    </div>
  );
};

export default MainPage;
