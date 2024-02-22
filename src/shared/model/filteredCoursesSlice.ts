import { CourseData } from '../../types/components/componentType';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';

interface FilteredCoursesState {
  map(
    arg0: (course: any) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  filteredCourses: CourseData[];
}

const initialState: FilteredCoursesState = {
  filteredCourses: [],
  map: function (arg0: (course: any) => JSX.Element): ReactNode {
    throw new Error('Function not implemented.');
  },
};

const FilteredCoursesSlice = createSlice({
  name: 'filteredCourses',
  initialState,
  reducers: {
    setFilteredCourses(state, action: PayloadAction<CourseData[]>) {
      state.filteredCourses = action.payload;
    },
  },
});

export const { setFilteredCourses } = FilteredCoursesSlice.actions;
export default FilteredCoursesSlice.reducer;
