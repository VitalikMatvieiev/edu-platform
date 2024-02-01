import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';

export const store = configureStore({
  reducer: { cart: cartReducer, favorite: favoriteReducer },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
