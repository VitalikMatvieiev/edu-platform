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
      // Check if exists in cart already -> then delete if yes
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action: PayloadAction<string>) {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
