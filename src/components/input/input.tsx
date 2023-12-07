import './_input.scss';
import { InputProps } from '../../types/components/componentType';

const Input: React.FC<InputProps> = ({
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
    <div className="input-container">
      <label className="input-label" htmlFor={inputId}>
        <div className="text-above">{aboveInputText}</div>
      </label>
      <input
        autoComplete="off"
        className="input-field"
        id={inputId}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors && errors[name] && (
        <div className="error-message">{errors[name].message}</div>
      )}
    </div>
  );
};

export default Input;
