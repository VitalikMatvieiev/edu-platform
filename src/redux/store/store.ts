import { configureStore } from '@reduxjs/toolkit';
import instructorsSlice from '../instructors/instructorsSlice';

export const store = configureStore({
  reducer: {
   instructorsReducer: instructorsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

