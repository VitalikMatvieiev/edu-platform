import styles from './_input.module.scss';
import { InputProps } from '../../../types/components/componentType';

export const Input: React.FC<InputProps> = ({
  aboveInputText,
  type,
  placeholder,
  name,
  register,
  validation,
  errors,
}) => {
  const inputId = 'input-' + aboveInputText.toLowerCase().replace(/\s/g, '-');

  return (
    <div className={styles['input-container']}>
      <label className={styles['input-label']} htmlFor={inputId}>
        <div className={styles['text-above']}>{aboveInputText}</div>
      </label>
      <input
        autoComplete="off"
        className={styles['input-field']}
        id={inputId}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors && errors[name] && (
        <div className={styles['error-message']}>{errors[name].message}</div>
      )}
    </div>
  );
};
