import { jwtDecode } from 'jwt-decode';
import { instance } from './requests';
import {
  IUserRegistration,
  IAuthResponseData,
  ILoginData,
  IUser,
} from '../types/types';

export const AuthService = {
  async registration(
    userData: IUserRegistration,
  ): Promise<IAuthResponseData | undefined> {
    try {
      const { data } = await instance.post<IAuthResponseData>(
        'auth/sign-up',
        userData,
      );

      if (data) {
        localStorage.setItem('accessToken', data.accessToken);

        return {
          ...data,
          ...jwtDecode(data.accessToken),
        };
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Registration failed');
    }
  },

  async login(userData: ILoginData): Promise<IUser | undefined> {
    try {
      const { data } = await instance.post<IUser>('auth/sign-in', userData);

      if (data) {
        localStorage.setItem('accessToken', data.accessToken);

        return {
          ...data,
          ...jwtDecode(data.accessToken),
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    }
  },

  async getProfile(): Promise<IAuthResponseData | undefined> {
    try {
      const { data } = await instance.get<IAuthResponseData>('auth/profile');
      if (data) return data;
    } catch (error) {
      console.error('Get profile error:', error);
      throw new Error('Failed to get profile');
    }
  },
};
