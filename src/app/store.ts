import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//1.7.taskReducerをimport
import taskReducer from '../features/task/taskSlice';

export const store = configureStore({
  reducer: {
    // 1.8.RootstateにtaskReducerを含める
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
