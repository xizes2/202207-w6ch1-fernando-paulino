import { createAction } from "@reduxjs/toolkit";
import { Task } from "../../models/models";
import { actionTypes } from "./actionTypes";

export const tasksLoadActionNew = createAction<Task>(actionTypes.loadTasks);
