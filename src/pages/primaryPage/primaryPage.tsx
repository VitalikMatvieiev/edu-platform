import { Sidebar } from '../../shared/components';
import './_primaryPage.scss';
import { Outlet } from 'react-router-dom';

const PrimaryPage: React.FC = () => {
  return (
    <div className="primary-container">
      <div className="aside-container">
        <Sidebar />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default PrimaryPage;
