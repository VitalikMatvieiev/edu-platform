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

export interface UserProfile {
  profilePhoto: string;
  username: string;
  email: string;
  dateOfBirth: string;
  registrationDate: string;
  lastLoginTimestamp: string;
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
