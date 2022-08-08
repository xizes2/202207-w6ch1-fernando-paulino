import { createAction } from "@reduxjs/toolkit";
import { Task } from "../../models/models";
import { actionTypes } from "./actionTypes";

export const unknownActionNew = createAction<Task[]>(actionTypes.unknown);

export const tasksLoadActionNew = createAction<Task[]>(actionTypes.loadTasks);

export const addTaskNew = createAction<Task>(actionTypes.addTask);
