import { SubmitButtonProps } from '../../../types/components/componentType';
import './_button.scss';

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  buttonText,
  className,
  onClick,
}) => {
  return (
    <>
      <button className={className} type="submit" onClick={onClick}>
        <p>{buttonText}</p>
      </button>
    </>
  );
};
