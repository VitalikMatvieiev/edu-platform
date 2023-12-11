import { ButtonProps } from '../../types/components/componentType';
import { FC } from 'react';
import './button.scss';
//Vitalii test 2
const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  type = 'button',
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`button ${color === 'primary' ? 'button--secondary' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
