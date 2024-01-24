export interface IUser {
  userId: number;
  username: string;
  accessToken: string;
}

export interface IUserLogin {
  userId: number;
  username: string;
}

export interface IUserRegistration {
  username: string;
  email: string;
  password: string | number;
  isInstructor: boolean;
  //   I'm not sure if this will be possible
  //   role: 'user' | 'instructor' | 'admin';
}

export interface IUserId {
  userId: number;
}

export interface ILoginData {
  username: string;
  password: string;
}

// Returned after successful authentication
export interface IAuthResponseData {
  accessToken: string;
  userId: number;
  username: string;
  password: string;
}

export interface ICourseDetailsResponseData {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  timeOfClasses: string;
  numberOfStudents: number;
  completedChapterLength: number;
  chaptersLength: number;
}

export interface Instructor {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string[];
}

export interface InstructorsState {
  instructors: Instructor[];
  filteredInstructors: Instructor[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string;
}

