import { CheckboxProps } from '../../types/components/componentType';
import styles from './_checkbox.module.scss';

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  classNameText,
  checkboxText,
  checked,
  onChange,
}) => {
  const checkboxId =
    'checkbox-' + checkboxText.toLowerCase().replace(/\s/g, '-');

  return (
    <div className={styles['checkbox-container']}>
      <input
        className={styles[`${className}`]}
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <label className={styles['checkbox-label']} htmlFor={checkboxId}>
        <div className={styles[`${classNameText}`]}>{checkboxText}</div>
      </label>
    </div>
  );
};
