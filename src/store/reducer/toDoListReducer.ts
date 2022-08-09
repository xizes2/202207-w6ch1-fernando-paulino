import { createReducer } from "@reduxjs/toolkit";
import { Task } from "../../models/models";
import {
  addTaskActionNew,
  deleteTaskActionNew,
  loadTasksActionNew,
} from "../types/actionCreators";

const initialToDoList: Task[] = [
  {
    id: "0",
    task: "",
    done: false,
  },
];

export const ToDoListReducer = createReducer(initialToDoList, (builder) => {
  builder
    .addCase(loadTasksActionNew, (state: Task[], action) => [...action.payload])
    .addCase(addTaskActionNew, (state: Task[], action) => [
      ...state,
      action.payload,
    ])
    .addCase(deleteTaskActionNew, (state, action) =>
      state.filter((task) => task.id !== action.payload)
    )
    .addDefaultCase((state: Task[]) => state);
});
