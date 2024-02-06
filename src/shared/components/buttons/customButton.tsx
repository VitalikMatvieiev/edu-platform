import { CustomButtonProps } from '../../../types/components/componentType';
import styles from './_button.module.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  color = 'primary',
  type = 'button',
  onClick,
  to,
  variant,
}) => {
  const commonClasses = `${styles[`${variant}`]} ${
    color === 'primary' ? styles[`${variant}--secondary`] : ''
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
