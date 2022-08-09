import { createAction } from "@reduxjs/toolkit";
import { Task } from "../../models/models";
import { actionTypes } from "./actionTypes";

export const unknownActionNew = createAction(actionTypes.unknown);

export const loadTasksActionNew = createAction<Task[]>(actionTypes.loadTasks);

export const addTaskNew = createAction<Task>(actionTypes.addTask);
