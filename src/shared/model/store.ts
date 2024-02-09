import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import filteredCoursesReducer from './filteredCoursesSlice';
import favoriteReducer from './favoriteSlice';
import coursesReducer from './coursesSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    courses: coursesReducer,
    filteredCourses: filteredCoursesReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
