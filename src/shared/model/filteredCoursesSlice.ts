import { CourseData } from '../../types/components/componentType';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface FilteredCoursesState {
  filteredCourses: CourseData[];
}

const initialState: FilteredCoursesState = {
  filteredCourses: [],
};

const filteredCoursesSlice = createSlice({
  name: 'filteredCourses',
  initialState,
  reducers: {
    setFilteredCourses(state, action: PayloadAction<CourseData[]>) {
      state.filteredCourses = action.payload;
    },
  },
});

export const { setFilteredCourses } = filteredCoursesSlice.actions;
export default filteredCoursesSlice.reducer;
