import './_button.scss';
import { SubmitButtonProps } from '../../types/components/componentType';

const Button: React.FC<SubmitButtonProps> = ({
  buttonText,
  onClick,
  className,
}) => {
  return (
    <>
      <button className={className} type="submit" onClick={onClick}>
        <p>{buttonText}</p>
      </button>
    </>
  );
};

export default Button;