import { createAsyncThunk } from '@reduxjs/toolkit';
import { Instructor } from '../../types/types';

const testInstructors: Instructor[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: '+380999555465',
    category: ['Science', 'History'],
  },
  {
    id: 2,
    name: 'Misha Rom',
    email: 'misha@gmail.com',
    phone: '+380547785465',
    category: ['Art', 'History'],
  },
  {
    id: 3,
    name: 'Vika Kol',
    email: 'vika@gmail.com',
    phone: '+380785963765',
    category: ['Mathematics', 'Physics'],
  },
  {
    id: 4,
    name: 'Roma Qur',
    email: 'roma@gmail.com',
    phone: '+380985785465',
    category: ['Science', 'Physics'],
  },
  {
    id: 5,
    name: 'Oleg Wer',
    email: 'oleg@gmail.com',
    phone: '+380678555465',
    category: ['Art', 'Mathematics'],
  },
];

export const getInstructors = createAsyncThunk('getInstructors', async () => {
  /*const instructors = await fetch('http://localhost:3001/instructors').then((res) =>
    res.json(),
  );
  return instructors;
  */
  return testInstructors;
});
