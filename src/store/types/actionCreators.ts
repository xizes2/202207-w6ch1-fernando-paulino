import { createAction } from "@reduxjs/toolkit";
import { Task } from "../../models/models";
import { actionTypes } from "./actionTypes";

export const unknownActionNew = createAction(actionTypes.unknown);

export const loadTasksActionNew = createAction<Task[]>(actionTypes.loadTasks);

export const addTaskActionNew = createAction<Task>(actionTypes.addTask);

export const deleteTaskActionNew = createAction<Task["id"]>(
  actionTypes.deleteTask
);
