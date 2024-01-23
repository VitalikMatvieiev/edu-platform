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

export interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxProps {
  className: string;
  classNameText: string;
  checkboxText: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
import { ReactNode, MouseEvent } from 'react';

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
  variant?: 'submit-btn' | 'user-page-btn';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface CustomButtonProps extends ButtonProps {
  to?: string;
}

export interface SubmitButtonProps {
  buttonText: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonUserPageProps extends ButtonProps {
  to?: string;
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

export interface MainPageProps {
  children?: ReactNode;
}

export interface CourseData {
  rating: number;
  photoUrl: string;
  name: string;
  category: string;
  price: number;
  level: string;
}

export interface Course {
  id: number;
  category: string;
}

export interface DetailsOfCourse {
  name: string;
  rating: number;
  popularity: number;
  date: string;
  price: number;
}

export interface EnrolledCoursesData {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  timeOfClasses: string;
  numberOfStudents: number;
  completedChapterLength: number;
  chaptersLength: number;
}

export interface CourseProgressProps {
  completedChapter: number;
  allChapter: number;
}

export interface Instructor {
  instructor: string;
}

export interface InstructorCount {
  instructor: string;
  quantity: number;
}

export interface Category {
  category: string;
}

export interface CategoryCount {
  category: string;
  quantity: number;
}

export interface Level {
  level: string;
}

export interface LevelCount {
  level: string;
  quantity: number;
}

export interface CustomCalendarTileProps {
  date: Date;
  view: string;
  events: { [date: string]: Event };
}

export interface Event {
  courseName: string;
  instructorName: string;
  date: Date;
}

export interface MessageProps {
  id: string;
  title: string;
  description: string;
}

export interface TitleOfSectionProps {
  titleText: string;
}