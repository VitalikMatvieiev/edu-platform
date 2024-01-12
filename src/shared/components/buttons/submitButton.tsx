import { SubmitButtonProps } from '../../../types/components/componentType';
import './_button.scss';

export const SubmitButton: React.FC<SubmitButtonProps> = ({
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
