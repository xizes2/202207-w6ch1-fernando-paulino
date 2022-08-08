import { createReducer } from "@reduxjs/toolkit";
import { Task } from "../../models/models";

const initialToDoList = {
  id: 0,
  name: "",
  done: false,
};

export const ToDoListReducer = createReducer(initialToDoList, (builder) => {
  builder.addDefaultCase((state: Task) => state);
});
