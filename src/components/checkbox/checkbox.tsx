import './_checkbox.scss';
import { CheckboxProps } from '../../types/components/componentType';

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  classNameText,
  checkboxText,
  checked,
  onChange,
}) => {
  const checkboxId =
    'checkbox-' + checkboxText.toLowerCase().replace(/\s/g, '-');

  return (
    <div className="checkbox-container">
      <input
        className={className}
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox-label" htmlFor={checkboxId}>
        <p className={classNameText}>{checkboxText}</p>
      </label>
    </div>
  );
};

export default Checkbox;
