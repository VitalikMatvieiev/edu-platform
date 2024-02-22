import { Sidebar } from '../../shared/components';
import styles from './_primaryPage.module.scss';
import { Outlet } from 'react-router-dom';

export const PrimaryPage: React.FC = () => {
  return (
    <div className={styles["primary-container"]}>
      <div className={styles["aside-container"]}>
        <Sidebar />
      </div>
      <div className={styles["outlet-container"]}>
        <Outlet />
      </div>
    </div>
  );
};

