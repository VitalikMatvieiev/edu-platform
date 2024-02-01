import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CourseData } from '../../types/components/componentType';

interface FavoriteState {
  favorite: CourseData[];
}

const initialState: FavoriteState = {
  favorite: [],
};

export const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    //  addToFavorite: (state, action: PayloadAction<CourseData>) => {
    //    state.favorite.push(action.payload);
    //  },

    addToFavorite(state, action: PayloadAction<CourseData>) {
      // Check if the course is already in the cart
      const existingCourse = state.favorite.find(
        (course) => course.id === action.payload.id,
      );

      // If not in the cart, add it
      if (!existingCourse) {
        state.favorite.push(action.payload);
      }
    },

    deleteFromFavorite(state, action: PayloadAction<string>) {
      // Filter out the course with the specified id
      state.favorite = state.favorite.filter(
        (course) => course.id !== action.payload,
      );
    },
  },
});

export default FavoriteSlice.reducer;
export const { addToFavorite, deleteFromFavorite } = FavoriteSlice.actions;
