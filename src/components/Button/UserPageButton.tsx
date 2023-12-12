import { ButtonUserPageProps } from '../../types/components/componentType';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const ButtonUserPage: FC<ButtonUserPageProps> = ({
  children,
  color = 'primary',
  type = 'button',
  onClick,
  to,
}) => {
  const commonClasses = `button ${color === 'primary' ? 'button--secondary' : ''}`;

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

export default ButtonUserPage;