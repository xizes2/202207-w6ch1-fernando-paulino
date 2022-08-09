import { createReducer } from "@reduxjs/toolkit";
import { Task } from "../../models/models";
import { addTaskNew, loadTasksActionNew } from "../types/actionCreators";

const initialToDoList: Task[] = [
  {
    id: 0,
    task: "",
    done: false,
  },
];

export const ToDoListReducer = createReducer(initialToDoList, (builder) => {
  builder
    .addCase(loadTasksActionNew, (state: Task[], action) => [...action.payload])
    .addCase(addTaskNew, (state: Task[], action) => [...state, action.payload])
    .addDefaultCase((state: Task[]) => state);
});
