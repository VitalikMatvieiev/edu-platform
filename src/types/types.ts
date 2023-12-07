export interface IUser {
  userId: number;
  username: string;
  accessToken: string;
}

export interface IUserLogin {
  userId: number;
  username: string;
}

export interface IResetPasswordRequest {
  username: string;
}

export interface IResetPasswordRequestResponse {
  userId: string;
  token: string;
}

export interface IResetPassword {
  token: string | null;
  newPassword: string;
}

export interface IUserId {
  userId: number;
}

export interface IUserData {
  username: string;
  password: string;
}

export interface IResponseUserData {
  accessToken: string;
  userId: number;
  username: string;
  password: string;
}
