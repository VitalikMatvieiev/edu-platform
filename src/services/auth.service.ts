import { instance } from '../api/axios.api';
import {
  IResetPasswordRequest,
  IUserRegistration,
  IResponseUserData,
  IResetPassword,
  IUserData,
  IUserId,
  IUser,
} from '../types/types';

export const AuthService = {
  async registration(
    userData: IUserRegistration,
  ): Promise<IResponseUserData | undefined> {
    const { data } = await instance.post<IResponseUserData>(
      'auth/sign-up',
      userData,
    );
    return data;
  },

  async login(userData: IUserData): Promise<IUser | undefined> {
    const { data } = await instance.post<IUser>('auth/sign-in', userData);
    return data;
  },

  async getProfile(): Promise<IResponseUserData | undefined> {
    const { data } = await instance.get<IResponseUserData>('auth/profile');
    if (data) return data;
  },

  async resetPasswordRequest(
    userData: IResetPasswordRequest,
  ): Promise<IUser | undefined> {
    const { data } = await instance.post<IUser>(
      'auth/reset-password-request',
      userData,
    );
    return data;
  },

  async resetPassword(userData: IResetPassword): Promise<IUserId | undefined> {
    const { data } = await instance.post<IUserId>(
      'auth/reset-password',
      userData,
    );
    return data;
  },
};
