import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ToDoListReducer } from "../store/reducer/toDoListReducer";

export const store = configureStore({
  reducer: {
    toDoList: ToDoListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
