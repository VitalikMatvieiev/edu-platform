import { ButtonUserPageProps } from '../../../types/components/componentType';
import './_button.scss';

import { Link } from 'react-router-dom';
import { FC } from 'react';

export const ButtonUserPage: FC<ButtonUserPageProps> = ({
  children,
  color = 'primary',
  type = 'button',
  onClick,
  to,
}) => {
  const commonClasses = `btn-user-page ${
    color === 'primary' ? 'btn-user-page--secondary' : ''
  }`;

  if (to) {
    return (
      <Link to={to} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={commonClasses} onClick={onClick}>
      {children}
    </button>
  );
};