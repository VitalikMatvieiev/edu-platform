import { CourseData } from '../../types/components/componentType';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CoursesState {
  courses: CourseData[];
  searchTerm: string;
  searchResults: CourseData[];
  filteredCourses: CourseData[];
  sortBy: string;
  order: 'asc' | 'desc';
}

const initialState: CoursesState = {
  courses: [],
  searchTerm: '',
  searchResults: [],
  filteredCourses: [],
  sortBy: 'price',
  order: 'asc',
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    // courses

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

    // search

    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.searchResults = []; // Reset results on new search
    },

    performSearch(state) {
      const term = state.searchTerm.toLowerCase();
      state.searchResults = state.courses.filter((item) =>
        item.name.toLowerCase().includes(term),
      );
    },

    // filter

    setFilteredCourses(state, action: PayloadAction<CourseData[]>) {
      state.filteredCourses = action.payload;
    },

    // sorting

    sortByPriceAsc: (state) => {
      state.sortBy = 'price';
      state.order = 'asc';
    },
    sortByPriceDesc: (state) => {
      state.sortBy = 'price';
      state.order = 'desc';
    },
    sortByRatingAsc: (state) => {
      state.sortBy = 'rating';
      state.order = 'asc';
    },
    sortByRatingDesc: (state) => {
      state.sortBy = 'rating';
      state.order = 'desc';
    },
  },
});

export const {
  addToCourses,
  deleteFromCourses,
  setCourses,
  setSearchTerm,
  performSearch,
  setFilteredCourses,
  sortByPriceAsc,
  sortByPriceDesc,
  sortByRatingAsc,
  sortByRatingDesc,
} = coursesSlice.actions;
export default coursesSlice.reducer;
