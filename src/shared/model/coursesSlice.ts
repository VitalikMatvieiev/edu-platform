import { CourseData } from '../../types/components/componentType';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';

interface CoursesState {
  map(
    arg0: (course: any) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  courses: CourseData[];
}

const initialState: CoursesState = {
  courses: [],
  map: function (arg0: (course: any) => JSX.Element): ReactNode {
    throw new Error('Function not implemented.');
  },
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addToCourses(state, action: PayloadAction<CourseData>) {
      state.courses.push(action.payload);
    },

    deleteFromCourses(state, action: PayloadAction<string>) {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload,
      );
    },

    setCourses(state, action: PayloadAction<CourseData[]>) {
      state.courses = action.payload;
    },
  },
});

export const { addToCourses, deleteFromCourses, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
