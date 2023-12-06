import { UseFormRegister } from 'react-hook-form';

export interface TitleProps {
  headerText: string;
}

export interface InputProps {
  aboveInputText: string;
  type: string;
  placeholder: string;
  name: keyof InputName;
  register: UseFormRegister<InputName>;
  validation: Record<string, any>;
  errors: Record<string, any>;
}

export interface CheckboxProps {
  className: string;
  classNameText: string;
  checkboxText: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SubmitButtonProps {
  buttonText: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputName {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  description: string;
  hours: number;
  age: number;
  imagePath: string;
}