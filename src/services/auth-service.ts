import dotenv from 'dotenv';
import axios from 'axios';
import {
  IUserRegistration,
  IAuthResponseData,
  ILoginData,
  IUser,
} from '../types/types';

// import types for process
declare var process: {
  env: {
    BASE_URL: string;
  };
};

dotenv.config();

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

export const AuthService = {
  async registration(
    userData: IUserRegistration,
  ): Promise<IAuthResponseData | undefined> {
    try {
      const { data } = await instance.post<IAuthResponseData>(
        'auth/sign-up',
        userData,
      );
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Registration failed');
    }
  },

  async login(userData: ILoginData): Promise<IUser | undefined> {
    try {
      const { data } = await instance.post<IUser>('auth/sign-in', userData);
      return data;
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
