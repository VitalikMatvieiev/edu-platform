import { createSlice } from '@reduxjs/toolkit';
import { getInstructors } from './instructorsAction';
import { Instructor, InstructorsState } from '../../types/types';


// Define the initial state using that type
const initialState: InstructorsState = {
  instructors: [],
  filteredInstructors: [],
  status: 'idle',
  error: '',
};

const instructorsSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {
    searchInstructors: (state, action) => {
      const filteredData = state.instructors.filter((instructor) => {
        return instructor.name
          .replace(/\s+/g, '')
          .toLowerCase()
          .includes(action.payload.replace(/\s+/g, '').toLowerCase());
      });
      state.filteredInstructors = filteredData;
    },

    filterByCategory: (state, action) => {
      if (action.payload === '') {
        state.filteredInstructors = state.instructors;
      } else {
        const filteredDataByCategory = state.instructors.filter(
          (instructor: Instructor) => {
            return instructor.category.includes(action.payload);
          },
        );
        state.filteredInstructors = filteredDataByCategory;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getInstructors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInstructors.fulfilled, (state, action) => {
        state.status = 'success';
        state.instructors = action.payload;
        state.filteredInstructors = action.payload;
      })
      .addCase(getInstructors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const { searchInstructors, filterByCategory } = instructorsSlice.actions;

export default instructorsSlice.reducer;
