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
