import { CourseData } from '../../types/components/componentType';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  cart: CourseData[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CourseData>) {
      // Check if the course is already in the cart
      const existingCourse = state.cart.find(
        (course) => course.id === action.payload.id,
      );

      // If not in the cart, add it
      if (!existingCourse) {
        state.cart.push(action.payload);
      }
    },

    deleteFromCart(state, action: PayloadAction<string>) {
      // Filter out the course with the specified id
      state.cart = state.cart.filter((course) => course.id !== action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
