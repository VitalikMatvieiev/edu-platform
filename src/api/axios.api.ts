import dotenv from 'dotenv';
import axios from 'axios';

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
