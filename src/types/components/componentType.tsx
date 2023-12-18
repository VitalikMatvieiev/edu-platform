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
}import { ReactNode, MouseEvent } from 'react';

export interface UserProfile {
  profilePhoto: string;
  username: string;
  email: string;
  dateOfBirth: string;
  registrationDate: string;
  lastLoginTimestamp: string;
}

export interface ButtonProps {
  children: ReactNode;
  color?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface FormikValues {
  profilePhoto: string;
  username: string;
  email: string;
  dateOfBirth: string;
}

export interface FormikConfigProps {
  userProfile: UserProfile | null;
  formError: string | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setFormError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ButtonUserPageProps extends ButtonProps {
  to?: string;
}

export interface MainPageProps {
  children?: ReactNode;
}

export interface CourseData {
  rating: number | null;
  photoUrl: string;
  name: string;
  category: string;
  price: number;
}